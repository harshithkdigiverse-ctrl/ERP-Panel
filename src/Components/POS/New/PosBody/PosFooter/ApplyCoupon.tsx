import { Divider } from "@mui/material";
import { CommonButton, CommonTextField } from "../../../../../Attribute";
import { useAppDispatch, useAppSelector } from "../../../../../Store/hooks";
import { setApplyCouponModal } from "../../../../../Store/Slices/ModalSlice";
import { CommonCard, CommonModal } from "../../../../Common";

const ApplyCoupon = () => {
  const { isApplyCouponModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  return (
    <CommonModal title="Apply Coupon" isOpen={isApplyCouponModal} onClose={() => dispatch(setApplyCouponModal())} className="max-w-[500px]">
      <div className="space-y-3 pe-1 sm:pe-3">
        <div className="flex justify-center">
          <span className="bg-brand-500 text-white px-4 py-2 rounded text-sm font-semibold">Invoice Balance: 500.00</span>
        </div>
        <div className="">
          <CommonTextField value="123456" onChange={(e) => console.log(e)} />
        </div>
        <CommonCard title="Coupon Name">
          {[1, 2, 3, 4].map((_, i, arr) => (
            <>
              <div key={i} className="flex items-center gap-3 p-3 m-0">
                {/* Coupon Text */}
                <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-400 truncate">LYT-01 - 1000 points</span>

                {/* Action */}
                <CommonButton title="Apply" variant="outlined" color="primary" size="small" className="shrink-0" />
              </div>
              {i !== arr.length - 1 && <Divider variant="middle" className="border-gray-300! dark:border-gray-800!" />}
            </>
          ))}
        </CommonCard>
        <CommonCard title="Customer Coupon">
          {[1, 2, 3, 4].map((_, i, arr) => (
            <>
              <div key={i} className="flex items-center gap-3 p-3 m-0">
                {/* Coupon Text */}
                <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-400 truncate">LYT-01 - 1000 points</span>

                {/* Action */}
                <CommonButton title="Apply" variant="outlined" color="primary" size="small" className="shrink-0" />
              </div>
              {i !== arr.length - 1 && <Divider variant="middle" className="border-gray-300! dark:border-gray-800!" />}
            </>
          ))}
        </CommonCard>
      </div>
    </CommonModal>
  );
};

export default ApplyCoupon;
