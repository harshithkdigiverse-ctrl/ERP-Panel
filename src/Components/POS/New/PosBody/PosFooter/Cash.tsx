import { useMemo, useState } from "react";
import { CommonButton, CommonTextField } from "../../../../../Attribute";
import { useAppDispatch, useAppSelector } from "../../../../../Store/hooks";
import { setCashModal } from "../../../../../Store/Slices/ModalSlice";
import { CommonModal } from "../../../../Common";

const DUE_AMOUNT = 50;

const keypad = ["1", "2", "3", "+5", "+100", "4", "5", "6", "+10", "+500", "7", "8", "9", "+20", "+2000", "C", "0", ".", "+50", "⌫"];

const Cash = () => {
  const { isCashModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const [tendered, setTendered] = useState<string>("0.00");

  const change = useMemo(() => {
    const paid = parseFloat(tendered || "0");
     return (paid - DUE_AMOUNT).toFixed(2);
  }, [tendered]);

  const handleKeyPress = (key: string) => {
    // CLEAR
    if (key === "C") {
      setTendered("0.00");
      return;
    }

    // BACKSPACE
    if (key === "⌫") {
      setTendered((prev) => {
        const next = prev.slice(0, -1);
        return next.length ? next : "0.00";
      });
      return;
    }

    // ADD AMOUNT (+5, +10...)
    if (key.startsWith("+")) {
      const add = Number(key.replace("+", ""));
      const current = parseFloat(tendered || "0");
      setTendered((current + add).toFixed(2));
      return;
    }

    // DECIMAL
    if (key === ".") {
      if (tendered.includes(".")) return;
      setTendered((prev) => (prev === "0.00" ? "0." : prev + "."));
      return;
    }

    // NUMBERS
    setTendered((prev) => {
      if (prev === "0.00") return key; // 🔥 THIS FIXES +4 ISSUE
      return prev + key;
    });
  };

  return (
    <CommonModal isOpen={isCashModal} onClose={() => dispatch(setCashModal())} className="max-w-[700px]" showCloseButton={false}>
      <div className="space-y-4 p-1">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-4">
          <div className="grid grid-cols-5 gap-2">
            {keypad.map((key) => (
              <button key={key} onClick={() => handleKeyPress(key)} className="border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded py-3 text-xs sm:text-base font-semibold hover:bg-gray-100 active:scale-95">
                {key}
              </button>
            ))}
          </div>
          <div className="flex flex-col justify-end gap-5">
            <div className="flex flex-col justify-end gap-4">
              <CommonTextField label="Due Amount" value={DUE_AMOUNT.toFixed(2)} disabled />
              <CommonTextField label="Tendered" value={tendered} type="number" onChange={(e) => setTendered(e)} color="primary" focused />
              <CommonTextField label="Change" value={change} color="success" focused readOnly />
            </div>
            <div className="flex flex-col justify-end gap-2">
              <CommonButton title="Submit" variant="contained" fullWidth className="py-4" />
              <CommonButton title="Cancel" variant="contained" color="error" fullWidth className="py-4" onClick={() => dispatch(setCashModal())} />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
    </CommonModal>
  );
};

export default Cash;
