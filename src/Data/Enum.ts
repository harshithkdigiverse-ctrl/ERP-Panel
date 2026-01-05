export const PRODUCT_TYPE = ["finished", "raw_material", "semi_finished", "service", "non_inventory"] as const;

export const RECIPE_TYPE = ["assemble", "unassemble"] as const;

export const PRODUCT_STATUS = ["active", "inactive"] as const;
export const ACCOUNT_TYPE = ["bank", "cash", "other"] as const;
export const ACCOUNT_NATURE = ["assets", "liabilities", "income", "expenses"] as const;
export const CONTACT_TYPE = ["customer", "supplier", "transporter", "both"] as const;
export const CUSTOMER_TYPE = ["retailer", "wholesaler", "merchant", "other"] as const;
export const SUPPLIER_TYPE = ["manufacturer", "stockiest", "trader", "other"] as const;
export const CONTACT_STATUS = ["active", "inactive"] as const;
export const COUPON_DISCOUNT_TYPE = ["percentage", "flat"] as const;
export const COUPON_STATUS = ["active", "inactive"] as const;
export const DISCOUNT_TYPE = ["percentage", "flat"] as const;
export const DISCOUNT_STATUS = ["active", "inactive"] as const;
export const EMPLOYEE_STATUS = ["active", "inactive"] as const;
export const INVOICE_PAYMENT_STATUS = ["paid", "unpaid", "partial"] as const;
export const LOYALTY_STATUS = ["active", "inactive"] as const;
export const LOYALTY_TYPE = ["points", "cashback"] as const;
export const PRODUCT_EXPIRY_TYPE = ["MFG", "expiry"] as const;
export const SUPPLIER_PAYMENT_STATUS = ["paid", "unpaid", "partial"] as const;
export const VOUCHAR_TYPE = ["journal", "payment", "receipt", "expense", "contra"] as const;

export const PRODUCT_TYPE_OPTIONS = [
  { label: "Finished", value: "finished" },
  { label: "Raw Material", value: "raw_material" },
  { label: "Semi Finished", value: "semi_finished" },
  { label: "Service", value: "service" },
  { label: "Non Inventory", value: "non_inventory" },
];

export const CATEGORY_OPTIONS = [{ label: "Flour", value: "679a1c2f8f4de1a01234abcd" }];
export const SUB_CATEGORY_OPTIONS = [{ label: "Whole Wheat", value: "679a1c3d8f4e1a001234abce" }];

export const BRAND_OPTIONS = [{ label: "Organic Brand", value: "679a1c4e8f4e1a001234abcf" }];

export const SUB_BRAND_OPTIONS = [{ label: "Premium", value: "679a1c5f8f4e1a001234abd0" }];
export const DEPARTMENT_OPTIONS = [{ label: "Grocery", value: "679a1c6f8f4e1a001234abd1" }];

export const UOM_OPTIONS = [{ label: "KG", value: "679a1c7f8f4e1a001234abd2" }];

export const TAX_OPTIONS = [
  { label: "GST 5%", value: "679a1c8f8f4e1a001234abd3" },
  { label: "GST 12%", value: "679a1c9f8f4e1a001234abd4" },
];

export const ORDER_TYPE = [
  { label: "Walk In", value: "Walk In" },
  { label: "Delivery", value: "Delivery" },
];

export const USER_TYPE = [
  { label: "Dhruvi Bakery", value: "Dhruvi Bakery" },
  { label: "Rakesh", value: "Rakesh" },
];

export const BAUD_RATE = [
  { label: "300 baud", value: "300" },
  { label: "1200 baud", value: "1200" },
  { label: "2400 baud", value: "2400" },
  { label: "4800 baud", value: "4800" },
  { label: "96000 baud", value: "96000" },
  { label: "19200 baud", value: "19200" },
  { label: "38400 baud", value: "38400" },
  { label: "57600 baud", value: "57600" },
  { label: "115200 baud", value: "115200" },
];

export const DATA_BITS = [
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
];

export const STOP_BITS = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
];

export const PARITY = [
  { label: "None", value: "None" },
  { label: "Even", value: "Even" },
  { label: "Odd", value: "Odd" },
  { label: "Mark", value: "Mark" },
  { label: "Space", value: "Space" },
];

export const FLOW_CONTROL = [
  { label: "None", value: "None" },
  { label: "RTC/CTS", value: "RTC/CTS" },
  { label: "DTR/DSR", value: "DTR/DSR" },
  { label: "XON/XOFF", value: "XON/XOFF" },
];

export const PRECISION = [
  { label: "None", value: "None" },
  { label: "Adjust 3 places", value: "Adjust 3 places" },
];

export const GST_TYPE = [
  { label: "UnRegistered", value: "UnRegistered" },
  { label: "Registered Regular", value: "Registered Regular" },
  { label: "Registered Composition", value: "Registered Composition" },
  { label: "Input Service Distributor", value: "Input Service Distributor" },
  { label: "E-Commerce Operator", value: "E-Commerce Operator" },
  { label: "Other", value: "Other" },
];

export const PAYMENTS = [
  { label: "Receipt", value: "Receipt" },
  { label: "Payment", value: "Payment" },
  { label: "Expense", value: "Expense" },
];

export const VOUCHER_TYPE = [
  { label: "Sales", value: "sales" },
  { label: "Purchase", value: "purchase" },
  { label: "Expense", value: "expense" },
];

export const PAYMENT_TYPE = [
  { label: "Advance Payment", value: "advancePayment" },
  { label: "Against Bill", value: "againstBill" },
];

export const PAYMENT_MODE = [
  { label: "Cash", value: "cash" },
  { label: "Card", value: "card" },
  { label: "UPI", value: "upi" },
  { label: "Wallet", value: "wallet" },
  { label: "Bank", value: "bank" },
  { label: "Cheque", value: "cheque" },
];

export const CASH_CONTROL = [
  { label: "Opening Balance", value: "openingBalance" },
  { label: "Add Money In", value: "addMoneyIn" },
]

export const REDEEM_CREDIT_TYPE = [
  { label: "Credit Note", value: "creditNote" },
  { label: "Advance Payment", value: "advancePayment" },
]

export const PAYMENT_TERMS=[
  {label:"7 Days",value:"7_days"},
  {label:"15 Days",value:"15_days"},
  {label:"30 Days",value:"30_days"},
  {label:"60 Days",value:"60_days"},
  {label:"90 Days",value:"90_days"},
]

export const SEND_REMINDER = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
]