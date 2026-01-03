import { Grid } from "@mui/material";
import { Form, Formik, type FormikHelpers } from "formik";
import type { FC } from "react";
import type { BrandBase, BrandFormValues } from "../../../Types/Brand";
import { Mutations } from "../../../Api";
import { GetChangedFields, RemoveEmptyFields } from "../../../Utils";
import { PAGE_TITLE } from "../../../Constants";
import { CommonCard, CommonModal } from "../../../Components/Common";
import { BrandFormSchema } from "../../../Utils/ValidationSchemas";
import { CommonButton, CommonValidationSwitch, CommonValidationTextField } from "../../../Attribute";



interface BrandFormModalProps {
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
    isEdit: BrandBase;
}

const BrandForm: FC<BrandFormModalProps> = ({ openModal, setOpenModal, isEdit }) => {
    const { mutate: addBrand, isPending: isAddLoading } = Mutations.useAddBrand();
    const { mutate: editBrand, isPending: isEditLoading } = Mutations.useEditBrand();

    const isEditing = Boolean(isEdit?._id);
    const pageMode = isEditing ? "EDIT" : "ADD";

    const initialValues: BrandFormValues = {
        name: isEdit?.name || "",
        code: isEdit?.code || "",
        description: isEdit?.description || "",
        parentBrandId: isEdit?.parentBrandId || "",
        isActive: isEdit?.isActive ?? true,
    };

    const handleSubmit = (values: BrandFormValues, { resetForm }: FormikHelpers<BrandFormValues>) => {
        const { _submitAction, ...rest } = values;

        const onSuccessHandler = () => {
            if (_submitAction === "saveAndNew") resetForm({ values: initialValues });
            else {
                resetForm();
                setOpenModal(!openModal);
            }
        };

        if (isEditing) {
            const changedFields = GetChangedFields(rest, isEdit);
            editBrand({ ...changedFields, brandId: isEdit?._id }, { onSuccess: onSuccessHandler });
        } else {
            addBrand(RemoveEmptyFields(rest), { onSuccess: onSuccessHandler });
        }
    };
    return (
        <CommonModal title={PAGE_TITLE.INVENTORY.BRAND[pageMode]} isOpen={openModal} onClose={() => setOpenModal(!openModal)} className="max-w-125 m-2 sm:m-5">
            <Formik<BrandFormValues> enableReinitialize initialValues={initialValues} validationSchema={BrandFormSchema} onSubmit={handleSubmit}>
                {({ setFieldValue, dirty }) => (
                    <Form noValidate>
                        <Grid container spacing={2}>
                            <CommonCard hideDivider grid={{ xs: 12 }}>
                                <Grid container spacing={2} sx={{ p: 2 }}>
                                    <CommonValidationTextField name="name" label="Brand Name" required grid={{ xs: 12 }} />
                                    <CommonValidationTextField name="code" label="Code" required grid={{ xs: 12 }} />
                                    <CommonValidationTextField name="description" label="Description" required grid={{ xs: 12 }} />
                                    <CommonValidationTextField name="parentBrandId" label="Parent Brand" required grid={{ xs: 12 }} />
                                    {!isEditing && <CommonValidationSwitch name="isActive" label="Is Active" grid={{ xs: 12 }} />}
                                    <Grid sx={{ display: "flex", gap: 2, ml: "auto" }}>
                                        <CommonButton variant="outlined" onClick={() => setOpenModal(!openModal)} title="Cancel" />
                                        <CommonButton type="submit" variant="contained" title="Save" onClick={() => setFieldValue("_submitAction", "save")} loading={isEditLoading || isAddLoading} disabled={!dirty} />
                                    </Grid>
                                </Grid>
                            </CommonCard>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </CommonModal>
    );
};

export default BrandForm;
