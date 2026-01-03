import * as Yup from "yup";
import { Validation } from "./Validation";

// ---------- Reusable helpers ----------

// const ImageSchema = (label: string, required = true) => Validation("array", label, required ? { minItems: 1 } : { required: false });
export const PhoneValidation = (label = "Phone No", options?: { requiredCountryCode?: boolean; requiredNumber?: boolean }) =>
  Yup.object({
    countryCode: Validation("string", "Country code", {
      required: options?.requiredCountryCode ?? true,
    }),

    phoneNo: Validation("string", label, {
      required: options?.requiredNumber ?? true,
      extraRules: (s) => s.trim().matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    }),
  });

// Signin
export const SigninSchema = Yup.object({
  email: Validation("string", "Email", { extraRules: (s) => s.email("Invalid email address") }),
  password: Validation("string", "Password", { extraRules: (s) => s.matches(/[!@#$%^&*()_+={}:;"'<>,.?/-]/, "Password must include at least one special character") }),
});

export const EmployeeFormSchema = Yup.object({
  // ---------- BASIC DETAILS ----------
  fullName: Validation("string", "FullName"),
  username: Validation("string", "Username"),
  // designation: Validation("string", "Designation", { required: false }),
  role: Validation("string", "Role", { required: false }),
  phoneNo: PhoneValidation(),
  email: Validation("string", "Email", { required: false, extraRules: (s) => s.trim().email("Invalid email address") }),
  branchId: Validation("string", "Branch Name", { required: false }),
  panNumber: Validation("string", "PAN Number", { required: false, extraRules: (s) => s.trim().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN Number") }),

  // ---------- ADDRESS ----------
  address: Yup.object({
    address: Validation("string", "Address"),
    country: Validation("string", "Country"),
    state: Validation("string", "State"),
    city: Validation("string", "City"),
    postalCode: Validation("string", "ZIP Code", { extraRules: (s) => s.matches(/^[0-9]{5,6}$/, "Invalid ZIP Code") }),
  }).nullable(),

  // ---------- BANK DETAILS ----------
  bankDetails: Yup.object({
    bankName: Validation("string", "Bank Name", { required: false }),
    branchName: Validation("string", "Branch Name", { required: false }),
    accountNumber: Validation("number", "Account Number", { required: false }).nullable(),
    bankHolderName: Validation("string", "Account Holder Name", { required: false }),
    swiftCode: Validation("string", "Swift Code", { required: false }),
    IFSCCode: Validation("string", "IFSC Code", { required: false, extraRules: (s) => s.trim().matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC Code") }),
  }).nullable(),

  // ---------- SALARY ----------
  wages: Validation("number", "Wages", { required: false }).nullable(),
  commission: Validation("number", "Commission", { required: false }).nullable(),
  extraWages: Validation("number", "Extra Wages", { required: false }).nullable(),
  target: Validation("number", "Target", { required: false }).nullable(),

  // ---------- STATUS ----------
  isActive: Yup.boolean(),
});

export const BranchFormSchema = Yup.object({
  name: Validation("string", "Branch name"),
  address: Validation("string", "Address"),
  isActive: Yup.boolean(),
});
export const BrandFormSchema = Yup.object({
  name: Validation("string", "Brand name"),
  code: Validation("string", "code"),
  description: Validation("string", "Description", { required: false }),
  parentcategory: Validation("string", "Parent Category", { required: false }),
  isActive: Validation("boolean", "is Active", { required: false }),
});

export const RolesFormSchema = Yup.object({
  name: Validation("string", "Roles name"),
  isActive: Yup.boolean(),
});

export const CallRequestFormSchema = Yup.object({
  businessName: Validation("string", "Business Name"),
  contactName: Validation("string", "Contact Name"),
  contactNo: PhoneValidation("Contact No"),
  note: Validation("string", "note"),
});

// ---------- Product Form Schema ----------
export const ProductFormSchema = Yup.object({
  itemCode: Validation("string", "Item Code"),
  productType: Validation("string", "Product Type"),
  name: Validation("string", "Product Name"),
  printName: Validation("string", "Print Name", { required: false }),
  slug: Validation("string", "Slug", { required: false }),

  categoryId: Validation("string", "Category"),
  subCategoryId: Validation("string", "Sub Category", { required: false }),

  brandId: Validation("string", "Brand", { required: false }),
  subBrandId: Validation("string", "Sub Brand", { required: false }),

  departmentId: Validation("string", "Department", { required: false }),
  uomId: Validation("string", "UOM"),

  tags: Validation("string", "Tags", { required: false }),

  description: Validation("string", "Description", { required: false }),
  shortNote: Validation("string", "Short Note", { required: false }),

  mrp: Validation("number", "MRP"),
  sellingPrice: Validation("number", "Selling Price"),
  purchasePrice: Validation("number", "Purchase Price"),
  landingCost: Validation("number", "Landing Cost"),

  purchaseTaxId: Validation("string", "Purchase Tax", { required: false }),
  salesTaxId: Validation("string", "Sales Tax", { required: false }),
  nutritionalFacts: Validation("string", "Nutritional Facts", { required: false }),
  status: Validation("string", "Status"),
});

export const CompanyFormSchemas = Yup.object({
  name: Validation("string", "Company Name"),
  displayName: Validation("string", "display Name"),
  contactName: Validation("string", "contact Name"),
  email: Validation("string", "Email", { extraRules: (s) => s.trim().email("Invalid email address") }),
  supportEmail: Validation("string", "support Email", { extraRules: (s) => s.trim().email("Invalid email address") }),
  customerCareNumber: Validation("string", "customer Care Number"),
  phoneNo: PhoneValidation(),
  ownerNo: PhoneValidation(),

  address: Validation("string", "address"),
  city: Validation("string", "city"),
  state: Validation("string", "State"),
  country: Validation("string", "country"),
  pinCode: Validation("string", "pinCode", { extraRules: (s) => s.trim().matches(/^[0-9]{6}$/, "Pin code must be 6 digits") }),
  timeZone: Validation("string", "timeZone", { required: false }),

  upiId: Validation("string", "upiId", { required: false }),

  userName: Validation("string", "userName", { required: false }),
  GSTRegistrationType: Validation("string", "GSTRegistrationType", { required: false }),
  GSTIdentificationNumber: Validation("string", "GSTIdentificationNumber", { required: false }),
  PanNo: Validation("string", "PanNo", { required: false, extraRules: (s) => s.trim().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid Pan Number") }),
  taxDeductionAndCollectionAccountNumber: Validation("string", "taxDeductionAndCollectionAccountNumber", { required: false }),
  webSite: Validation("string", "webSite", { required: false }),
  financialYear: Validation("string", "financialYear", { required: false }),
  corporateIdentificationNumber: Validation("string", "corporateIdentificationNumber", { required: false }),
  letterOfUndertaking: Validation("string", "letterOfUndertaking", { required: false }),
  importerExporterCode: Validation("string", "importerExporterCode", { required: false }),
  outletSize: Validation("string", "outletSize", { required: false }),
  fssaiNo: Validation("string", "fssaiNo", { required: false, extraRules: (s) => s.trim().matches(/^[0-9]{14}$/, "FSSAI number must be exactly 14 digits") }),
  currency: Validation("string", "currency", { required: false }),
  printDateFormat: Validation("string", "printDateFormat", { required: false }),
  decimalPoint: Validation("string", "decimalPoint", { required: false }),

  allowRoundOff: Validation("boolean", "allowRoundOff", { required: false }),
  enableFeedbackModule: Validation("boolean", "enableFeedbackModule", { required: false }),

  logo: Validation("string", "Logo", { required: false }),
  waterMark: Validation("string", "Water Mark", { required: false }),
  reportFormatLogo: Validation("string", "Report Format Logo", { required: false }),
  authorizedSignature: Validation("string", "Authorized Signature", { required: false }),
});

export const WeightScaleFormSchema = Yup.object({
  baudRate: Validation("string", "Baud Rate"),
  dataBits: Validation("string", "Data Bits"),
  stopBits: Validation("string", "Stop Bits"),
  parity: Validation("string", "Parity"),
  flowControl: Validation("string", "Flow Control"),
  precision: Validation("string", "Precision"),
});

export const CustomerFormSchema = Yup.object({
  baudRate: Validation("string", "Baud Rate"),
  dataBits: Validation("string", "Data Bits"),
  stopBits: Validation("string", "Stop Bits"),
  parity: Validation("string", "Parity"),
  flowControl: Validation("string", "Flow Control"),
  precision: Validation("string", "Precision"),
});
