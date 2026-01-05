import { Grid } from "@mui/material";
import { Form, Formik, type FormikHelpers } from "formik";
import type { FC } from "react";
import { Mutations } from "../../../Api";
import { CommonButton, CommonValidationSwitch, CommonValidationTextField } from "../../../Attribute";
import { CommonModal } from "../../../Components/Common";
import { PAGE_TITLE } from "../../../Constants";
import type { BrandFormValues } from "../../../Types/Brand";
import { GetChangedFields, RemoveEmptyFields } from "../../../Utils";
import { BrandFormSchema } from "../../../Utils/ValidationSchemas";
import { useDispatch, useSelector } from "react-redux";
import { setBrandModal } from "../../../Store/Slices/ModalSlice";

const BrandForm: FC = () => {
    const { mutate: addBrand, isPending: isAddLoading } = Mutations.useAddBrand();
    const { mutate: editBrand, isPending: isEditLoading } = Mutations.useEditBrand();
    const dispatch = useDispatch();
    const { isBrandModal } = useSelector((state: any) => state.modal);
    const isEdit = isBrandModal.data;
    const openModal = isBrandModal.open;
    const isEditing = Boolean(isEdit?._id);
    const pageMode = isEditing ? "EDIT" : "ADD";

    const initialValues: BrandFormValues = {
        name: isEdit?.name || "",
        code: isEdit?.code || "",
        image: isEdit?.image || null,
        description: isEdit?.description || "",
        parentBrandId: isEdit?.parentBrandId || "",
        isActive: isEdit?.isActive ?? true,
    };
    const closeModal = () => {
        dispatch(setBrandModal({ open: false, data: null }));
    }
    const handleSubmit = (values: BrandFormValues, { resetForm }: FormikHelpers<BrandFormValues>) => {
        const { _submitAction, ...rest } = values;

        const onSuccessHandler = () => {
            resetForm()
            closeModal();
        };

        if (isEditing) {
            const changedFields = GetChangedFields(rest, isEdit);
            editBrand({ ...changedFields, brandId: isEdit?._id }, { onSuccess: onSuccessHandler });
        } else {
            addBrand(RemoveEmptyFields(rest), { onSuccess: onSuccessHandler });
        }
    };
    return (
        <CommonModal title={PAGE_TITLE.INVENTORY.BRAND[pageMode]} isOpen={openModal} onClose={closeModal} className="max-w-125 m-2 sm:m-5">
            <Formik<BrandFormValues> enableReinitialize initialValues={initialValues} validationSchema={BrandFormSchema} onSubmit={handleSubmit}>
                {({ setFieldValue, dirty }) => (
                    <Form noValidate>
                        <Grid container spacing={2} sx={{ p: 1 }}>
                            <CommonValidationTextField name="name" label="Brand Name" required grid={{ xs: 12 }} />
                            <CommonValidationTextField name="code" label="Code" required grid={{ xs: 12 }} />
                            <CommonValidationTextField name="description" label="Description" required grid={{ xs: 12 }} />
                            <CommonValidationTextField name="parentBrandId" label="Parent Brand" required grid={{ xs: 12 }} />
                            <CommonValidationTextField name="image" label="Image" grid={{ xs: 12 }} />
                            {!isEditing && <CommonValidationSwitch name="isActive" label="Is Active" grid={{ xs: 12 }} />}
                            <Grid sx={{ display: "flex", gap: 2, ml: "auto" }}>
                                <CommonButton variant="outlined" onClick={closeModal} title="Cancel" />
                                <CommonButton type="submit" variant="contained" title="Save" onClick={() => setFieldValue("_submitAction", "save")} loading={isEditLoading || isAddLoading} disabled={!dirty} />
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </CommonModal>
    );
};

export default BrandForm;
