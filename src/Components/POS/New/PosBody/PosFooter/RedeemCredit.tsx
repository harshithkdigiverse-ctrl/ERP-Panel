import { useState } from "react";
import { CommonButton, CommonRadio, CommonTextField } from "../../../../../Attribute";
import { REDEEM_CREDIT_TYPE } from "../../../../../Data";
import { useAppDispatch, useAppSelector } from "../../../../../Store/hooks";
import { setRedeemCreditModal } from "../../../../../Store/Slices/ModalSlice";
import { CommonModal } from "../../../../Common";

const RedeemCredit = () => {
  const { isRedeemCreditModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const [type, setType] = useState<string>("creditNote");
  const isCredit = type === "creditNote";
  const creditDetails = [{ label: `${isCredit ? "Credit Note" : "Adv Payment"} Date`, value: "N/A" }, { label: `${isCredit ? "Credit " : "Adv Payment"} Amount`, value: "0.00" }, { label: `${isCredit ? "Credit " : "Amount "} Available`, value: "0.00" }, { label: `Apply ${isCredit ? "Credit" : "Amount"}` }];

  return (
    <CommonModal title="Redeem Credit" isOpen={isRedeemCreditModal} onClose={() => dispatch(setRedeemCreditModal())} className="max-w-[400px]">
      <div className="space-y-3">
        {/* Type Selection */}
        <div className="flex justify-center">
          <CommonRadio value={type} onChange={setType} options={REDEEM_CREDIT_TYPE} />
        </div>

        {/* Invoice Balance */}
        <div className="flex justify-center">
          <span className="bg-brand-500 text-white px-4 py-2 rounded text-sm font-semibold">Invoice Balance: 500.00</span>
        </div>

        {/* Scan / Input */}
        <div>{isCredit ? <CommonTextField label="Invoice Number" value="" placeholder="Sales Return" onChange={(e) => console.log(e)} /> : <CommonTextField label="Invoice Number" value="" placeholder="Advance Payment" onChange={(e) => console.log(e)} />}</div>

        {/* Credit Details */}
        <div>
          {creditDetails.map((item, index) => (
            <div key={index} className="flex justify-between items-center text-sm py-1">
              <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
              {item.value ? (
                <span className="font-medium dark:text-gray-200">{item.value}</span>
              ) : (
                <div className="w-1/2">
                  <CommonTextField value="123456" onChange={(e) => console.log(e)} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Apply Credit */}

        {/* Payable Amount */}
        <div className="flex justify-between items-center border-t border-gray-300 dark:border-gray-700 pt-2">
          <span className="text-sm font-semibold dark:text-gray-200">₹ Payable Amt</span>
          <span className="text-lg font-bold dark:text-gray-200">500.00</span>
        </div>

        {/* Action Button */}
        <CommonButton title="Apply Credit" variant="contained" fullWidth onClick={() => dispatch(setRedeemCreditModal())} />
      </div>
    </CommonModal>
  );
};

export default RedeemCredit;
