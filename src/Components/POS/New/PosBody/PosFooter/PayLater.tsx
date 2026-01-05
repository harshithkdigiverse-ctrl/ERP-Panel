import { useState } from "react";
import { CommonButton, CommonRadio, CommonSelect, CommonTextField } from "../../../../../Attribute";
import { PAYMENT_TERMS, SEND_REMINDER } from "../../../../../Data";
import { useAppDispatch, useAppSelector } from "../../../../../Store/hooks";
import { setPayLaterModal } from "../../../../../Store/Slices/ModalSlice";
import { CommonModal } from "../../../../Common";

const PayLater = () => {
  const { isPayLaterModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string[]>(["7_days"]);
  const [values, setValues] = useState("10/01/2026");
  const [contactType, setContactType] = useState("yes");

  const calculateDueDate = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);

    return date.toLocaleDateString("en-GB");
  };

  return (
    <CommonModal title="Pay Later" isOpen={isPayLaterModal} onClose={() => dispatch(setPayLaterModal())} className="max-w-[400px]">
      <div className="space-y-5 pe-1 sm:pe-3">
        <div className="flex justify-center">
          <span className="bg-brand-500 text-white px-4 py-2 rounded text-sm font-semibold">Invoice Amount: 500.00</span>
        </div>
        {/* Payment Terms */}   
        <div>
          <CommonSelect
            label="Payment Terms"
            options={PAYMENT_TERMS}
            value={value}
            limitTags={1}
            onChange={(v) => {
              setValue(v);

              if (v?.length) {
                const days = parseInt(v[0]); 
                setValues(calculateDueDate(days));
              }
            }}
          />
        </div>

        {/* Due Date */}
        <div>
          <CommonTextField label="Due Date" value={values} onChange={(v) => setValues(v)} disabled />
        </div>

        {/* Send Reminder */}
        <div>
          <CommonRadio label="Send Reminder" value={contactType} onChange={setContactType} options={SEND_REMINDER} />
        </div>
        <CommonButton fullWidth title="Proceed to Print" variant="contained" size="small" />
      </div>
    </CommonModal>
  );
};

export default PayLater;
