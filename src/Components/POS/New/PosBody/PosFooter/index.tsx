import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FastForwardIcon from "@mui/icons-material/FastForward";
import PauseIcon from "@mui/icons-material/Pause";
import RedeemIcon from "@mui/icons-material/Redeem";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import { Grid } from "@mui/material";
import { useState } from "react";
import { CommonButton, CommonTextField } from "../../../../../Attribute";
import { useAppDispatch } from "../../../../../Store/hooks";
import { setAdditionalChargeModal, setApplyCouponModal, setCardModal, setCashModal, setPayLaterModal, setRedeemCreditModal } from "../../../../../Store/Slices/ModalSlice";
import RedeemCredit from "./RedeemCredit";
import CardDetails from "./CardDetails";
import ApplyCoupon from "./ApplyCoupon";
import PayLater from "./PayLater";
import Cash from "./Cash";
import { setMultiplePay } from "../../../../../Store/Slices/PosSlice";
const PosFooter = () => {
  const [value, setValue] = useState<string>("");
  const summaryRowData = [{ label: "Quantity", value: "1.000" }, { label: "MRP", value: "50.00" }, { label: "Tax Amount", value: "7.63" }, { label: "Add Charges+", value: "0.00" }, { label: "Discount", value: "0.00" }, { label: "Flat Discount" }, { label: "Round OFF" }, { label: "Amount", value: "50", highlight: true }];
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="w-full bg-white dark:bg-gray-dark">
        {/* Remarks */}
        <div className="p-2">
          <CommonTextField label="Remarks" placeholder="Remarks" value={value} onChange={(e) => setValue(e)} />
        </div>

        {/* Summary Row */}
        <Grid container className="flex items-center py-2">
          {summaryRowData.map((item, index) => (
            <Grid size={{ xs: 6, sm: 1.5 }} key={index} className={`flex flex-col items-center justify-center px-4 ${!item.highlight ? "border-r border-gray-300 dark:border-gray-700" : ""} `}>
              {item.label === "Flat Discount" && <CommonTextField label="Flat Discount" value={value} onChange={(e) => setValue(e)} isCurrency />}
              {item.label === "Round OFF" && <CommonTextField label="Round OFF" value={value} onChange={(e) => setValue(e)} />}
              {item.value && (
                <>
                  <span className={`font-semibold ${item.highlight ? "text-brand-600 text-2xl" : "text-lg text-gray-900 dark:text-gray-100"}`}>{item.value}</span>
                  {item.label === "Add Charges+" ? <span onClick={() => dispatch(setAdditionalChargeModal())} className={`text-sm font-medium cursor-pointer text-brand-600 mt-1`}>{item.label}</span> : <span className={`text-sm font-medium ${item.highlight ? "text-brand-600" : "text-gray-700 dark:text-gray-400"} mt-1`}>{item.label}</span>}
                </>
              )}
            </Grid>
          ))}
        </Grid>

        {/* Action Buttons */}
        <div className="grid grid-cols-6 gap-2 p-2">
          <CommonButton title="Multiple Pay (F12)" variant="contained" startIcon={<VerticalSplitIcon />} onClick={() => dispatch(setMultiplePay())} />
          <CommonButton title="Redeem Credit" variant="contained" startIcon={<RedeemIcon />} onClick={() => dispatch(setRedeemCreditModal())} />
          <CommonButton title="Hold (F6)" variant="contained" startIcon={<PauseIcon />} />
          <CommonButton title="UPI (F5)" variant="contained" startIcon={<FastForwardIcon />} />
          <CommonButton title="Card (F3)" variant="contained" startIcon={<CreditCardIcon />} onClick={() => dispatch(setCardModal())} />
          <CommonButton title="Cash (F4)" variant="contained" startIcon={<CurrencyRupeeIcon />} onClick={() => dispatch(setCashModal())} />
          <CommonButton title="Apply Coupon" variant="contained" startIcon={<RedeemIcon />} onClick={() => dispatch(setApplyCouponModal())} />
          <CommonButton title="Pay Later (F11)" variant="contained" startIcon={<CalendarMonthIcon />} onClick={() => dispatch(setPayLaterModal())} />
          <CommonButton title="Hold & Print (F7)" variant="contained" startIcon={<PauseIcon />} />
          <CommonButton title="UPI & Print (F10)" variant="contained" startIcon={<FastForwardIcon />} />
          <CommonButton title="Card & Print (F9)" variant="contained" startIcon={<CreditCardIcon />} />
          <CommonButton title="Cash & Print (F8)" variant="contained" startIcon={<CurrencyRupeeIcon />} />
        </div>
      </div>
      <RedeemCredit />
      <CardDetails />
      <ApplyCoupon />
      <PayLater />
      <Cash />
    </>
  );
};

export default PosFooter;
