import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Box, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { CommonButton, CommonPhoneNumber, CommonValidationTextField } from "../../Attribute";
import { CommonModal } from "../../Components/Common";
import { Mutations } from "../../Api";
import { CallRequestFormSchema } from "../../Utils/ValidationSchemas";
import type { CallRequestFormValues } from "../../Types";

const SupportDesk = () => {
  const [open, setOpen] = useState(false);

  const { mutate: callRequestMutate, isPending: isCallRequestLoading } = Mutations.useAddCallRequest();

  const initialValues: CallRequestFormValues = {
    businessName: "",
    contactName: "",
    contactNo: { countryCode: "", phoneNo: "" },
    note: "",
  };

  const handleSubmit = (values: CallRequestFormValues) => callRequestMutate(values, { onSuccess: () => setOpen(false) });

  return (
    <>
      <Box className="relative group">
        <div className="flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full h-11 w-11 max-xsm:h-9 max-xsm:w-9 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
          <SupportAgentIcon sx={{ fontSize: { xs: 20, md: 22 } }} />
        </div>
        <div className="absolute lg:right-0 mt-3 flex min-w-[285px] max-w-[330px] flex-col rounded-xl border border-gray-50 bg-white shadow-tooltip dark:border-gray-800 dark:bg-gray-dark z-50 opacity-0 invisible scale-95 translate-y-2 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0 ">
          <div className="flex justify-center items-center p-3 mb-3 border-b border-gray-300 dark:border-gray-700">
            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Support Desk</h5>
          </div>
          <div className="p-3">
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 border-b pb-3 border-gray-100 dark:border-gray-800">
                <LocalPhoneIcon className="text-gray-700 dark:text-gray-300" />
                <span className="text-gray-800 dark:text-gray-300">+91 80008 77644</span>
              </li>
              <li className="flex items-center gap-3 border-b pb-3 border-gray-100 dark:border-gray-800">
                <MailOutlineIcon className="text-gray-700 dark:text-gray-300" />
                <span className="text-gray-800 dark:text-gray-300">support@vasyerp.com</span>
              </li>
              <li className="flex items-center gap-3 border-b pb-3 border-gray-100 dark:border-gray-800">
                <AccessTimeIcon className="text-gray-700 dark:text-gray-300" />
                <span className="text-gray-800 dark:text-gray-300">9:00 AM – 9:00 PM (IST)</span>
              </li>
            </ul>
            <button onClick={() => setOpen(!open)} className="mt-4 w-full py-2 text-center text-white font-medium bg-brand-500 rounded-lg hover:bg-brand-600">
              Request A Callback
            </button>
          </div>
        </div>
      </Box>
      <CommonModal isOpen={open} title="Talk To Our Expert" subTitle="Fill In Your Info - We'll Reach Out Shortly" onClose={() => setOpen(!open)} className="max-w-[500px] m-2 sm:m-5">
        <div className="flex flex-col gap-5">
          <Formik<CallRequestFormValues> initialValues={initialValues} validationSchema={CallRequestFormSchema} enableReinitialize onSubmit={handleSubmit}>
            <Form noValidate>
              <Grid sx={{ px: 1 }} container spacing={2}>
                <CommonValidationTextField name="businessName" label="Business Name" grid={{ xs: 12 }} required />
                <CommonValidationTextField name="contactName" label="Contact Name" grid={{ xs: 12 }} required />
                <CommonPhoneNumber label="Phone No." countryCodeName="contactNo.countryCode" numberName="contactNo.phoneNo" grid={{ xs: 12 }} required />
                <CommonValidationTextField name="note" label="Notes" type="textarea" multiline rows={2} validating={false} grid={{ xs: 12 }} required />
                <CommonButton type="submit" variant="contained" title="Send" size="medium" loading={isCallRequestLoading} fullWidth grid={{ xs: 12 }} />
              </Grid>
            </Form>
          </Formik>
        </div>
      </CommonModal>
    </>
  );
};

export default SupportDesk;
