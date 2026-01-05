import CloseIcon from "@mui/icons-material/Close";
import { Box, Grid } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import { CommonButton, CommonValidationSelect, CommonValidationTextField } from "../../../../../Attribute";
import { PAYMENT_MODE } from "../../../../../Data";
import { MultiplePaySchema } from "../../../../../Utils/ValidationSchemas";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useAppDispatch } from "../../../../../Store/hooks";
import { setMultiplePay } from "../../../../../Store/Slices/PosSlice";

const MultiplePay = () => {
  const dispatch = useAppDispatch();

  const initialValues = {
    payments: [
      {
        amount: "",
        paymentMode: "cash",
        account: "",
        cardHolderName: "",
        paymentAccount: "",
        cardTxnNo: "",
        upiId: "",
        bankAccountNo: "",
        chequeNo: "",
      },
    ],
  };

  const ProductData = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
    { name: "Product 1", price: 10 },
  ];

  const handleSubmit = (values: any) => {
    console.log("values", values);
  };

  return (
    <Box className=" p-3 md:p-5">
      {/* LEFT – SUMMARY */}
      <Grid container spacing={2} className="bg-white dark:bg-gray-dark p-3">
        <Grid size={{ xs: 12, lg: 5, xl: 3 }} className="border-b lg:border-e border-gray-200 dark:border-gray-800 py-3 ps-2 pe-2 lg:pe-7 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-medium mb-1 text-gray-600 dark:text-gray-300">Sale Summary</h3>
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Customer : </span>
              <span className="text-sm text-brand-500">Walk in Customer</span>
            </div>
            <div className="border border-gray-200 dark:border-gray-600 rounded-md overflow-hidden my-3">
              <div className="max-h-120 overflow-y-auto custom-scrollbar">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 z-10 bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-100">
                    <tr>
                      <th className="px-3 py-2 text-left">Sr No.</th>
                      <th className="px-3 py-2 text-left">Product</th>
                      <th className="px-3 py-2 text-right">Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ProductData.map((note, index) => (
                      <tr key={index} className="bg-white dark:bg-gray-800 even:bg-gray-50 dark:even:bg-gray-dark">
                        <td className="px-3 py-2 text-start font-medium text-gray-600 dark:text-gray-300">{index + 1}</td>
                        <td className="px-3 py-2 text-start font-medium text-gray-600 dark:text-gray-300">{note.name}</td>

                        <td className="px-3 py-2 text-right dark:text-gray-300">{note.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="text-base space-y-2 text-gray-800 dark:text-gray-400">
            <div className="flex justify-between">
              <span>Tax Amount</span>
              <span className="dark:text-gray-300">0</span>
            </div>
            <div className="flex justify-between">
              <span>Total Amount</span>
              <span className="dark:text-gray-300">50</span>
            </div>
            <div className="flex justify-between">
              <span>Roundoff</span>
              <span className="dark:text-gray-300">0</span>
            </div>
            <div className="flex flex-col items-end font-normal">
              <span className="text-3xl dark:text-gray-300">50</span>
              <span>Payable Amount</span>
            </div>
          </div>
        </Grid>

        {/* RIGHT – PAYMENTS */}
        <Grid size={{ xs: 12, lg: 7, xl: 9 }}>
          <h3 className="font-semibold mb-3 text-gray-600 dark:text-gray-300">Pay</h3>

          <div className="space-y-3">
            <div className="p-3 rounded">
              <Formik enableReinitialize initialValues={initialValues} validationSchema={MultiplePaySchema} onSubmit={handleSubmit}>
                {({ values }) => (
                  <Form>
                    <FieldArray name="payments">
                      {({ push, remove }) => (
                        <div>
                          <div className="space-y-3 max-h-145! overflow-y-auto custom-scrollbar">
                            {values.payments.map((pay, index) => (
                              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                                <Grid container spacing={2} alignItems="center">
                                  <CommonValidationTextField name={`payments.${index}.amount`} label="Received Amount" type="number" grid={{ xs: 12, sm: 4 }} />
                                  <CommonValidationSelect name={`payments.${index}.paymentMode`} label="Payment Method" options={PAYMENT_MODE} grid={{ xs: 12, sm: 4 }} />
                                  {!["cash"].includes(pay.paymentMode) && <CommonValidationSelect name={`payments.${index}.paymentAccount`} label="Payment Account:" options={PAYMENT_MODE} grid={{ xs: 12, sm: 4 }} />}
                                  {pay.paymentMode === "card" && (
                                    <>
                                      <CommonValidationTextField name={`payments.${index}.cardHolderName`} label="Card Holder Name" grid={{ xs: 12, sm: 4 }} />
                                      <CommonValidationTextField name={`payments.${index}.cardTxnNo`} label="Card Transaction No" grid={{ xs: 12, sm: 4 }} />
                                    </>
                                  )}
                                  {pay.paymentMode === "upi" && <CommonValidationTextField name={`payments.${index}.upiId`} label="UPI ID" grid={{ xs: 12, sm: 4 }} />}
                                  {pay.paymentMode === "bank" && <CommonValidationTextField name={`payments.${index}.bankAccountNo`} label="Bank Account No" grid={{ xs: 12, sm: 4 }} />}
                                  {pay.paymentMode === "cheque" && <CommonValidationTextField name={`payments.${index}.chequeNo`} label="Cheque No" grid={{ xs: 12, sm: 4 }} />}
                                  {values.payments.length > 1 && (
                                    <Grid>
                                      <CommonButton variant="outlined" size="small" color="error" onClick={() => remove(index)}>
                                        <CloseIcon />
                                      </CommonButton>
                                    </Grid>
                                  )}
                                </Grid>
                              </div>
                            ))}
                          </div>

                          <button type="button" onClick={() => push({ amount: "", paymentMode: "cash" })} className="mt-3 text-blue-600 text-sm">
                            ➕ Add More Payment
                          </button>
                          <p className="text-red-500 my-4 text-base">Note: If you don't pay in full, the remaining amount will be considered as Pay Later.</p>

                          {/* SUBMIT */}
                          <div className="flex gap-3">
                            <CommonButton variant="outlined" type="submit" title="Back To Sale" startIcon={<KeyboardDoubleArrowLeftIcon />} className="mt-4" onClick={() => dispatch(setMultiplePay())} />
                            <CommonButton variant="contained" type="submit" title="Proceed To Pay" endIcon={<KeyboardDoubleArrowRightIcon />} className="mt-4" />
                          </div>
                        </div>
                      )}
                    </FieldArray>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MultiplePay;
