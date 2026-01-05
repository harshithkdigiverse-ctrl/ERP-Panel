import type { Breakpoint, ButtonProps, DrawerProps, PaperProps as MuiPaperProps, TextFieldProps } from "@mui/material";
import type { GridColDef, GridFilterModel, GridPaginationModel, GridRowsProp, GridSortModel, GridValidRowModel } from "@mui/x-data-grid";
import type { Dayjs } from "dayjs";
import type { MuiTelInputProps } from "mui-tel-input";
import type { FocusEvent, ReactNode } from "react";
import * as Yup from "yup";
import type { CustomerFormValues } from "./Customer";

type GridType = number | object | "auto" | "grow";

export interface PhoneNumberType {
  countryCode?: string;
  phoneNo?: string;
}

export type AppGridColDef<T extends GridValidRowModel> = GridColDef<T> & {
  exportFormatter?: (value: unknown, row: T) => string | number;
};

// ************ Drawer Start ***********

export interface CommonDrawerProps extends Omit<DrawerProps, "anchor" | "title"> {
  open: boolean;
  onClose: () => void;
  anchor?: "left" | "right" | "top" | "bottom";
  title?: React.ReactNode;
  width?: number | string;
  fullScreenBelow?: Breakpoint;
  showDivider?: boolean;
  hideCloseButton?: boolean;
  paperProps?: MuiPaperProps;
}

// ************ Drawer End ***********

// ************ Select Start ***********

export type SelectOptionType = {
  label: string;
  value: string;
};

export interface CommonSelectProps {
  label?: string;
  options: SelectOptionType[];
  value: string[];
  onChange: (values: string[]) => void;
  multiple?: boolean;
  limitTags?: number;
  size?: "small" | "medium";
  grid?: GridType;
  required?: boolean;
  disabled?: boolean;
}

export interface CommonValidationSelectProps extends Omit<CommonSelectProps, "onChange" | "value"> {
  name: string;
}

// ************ Select End ***********

// ************ Common Phone Number start ***********

export interface CommonPhoneNumberProps extends Omit<MuiTelInputProps, "value" | "onChange" | "name" | "forceCallingCode"> {
  countryCodeName: string; // Formik field
  numberName: string; // Formik field
  label?: string;
  required?: boolean;
  isFormLabel?: boolean;
  grid?: object | number;
}

// ************  Common Phone Number End ***********

// ************ Date Range Selector Start ***********

export interface CommonDateRangeSelectorProps {
  value: { start: Dayjs; end: Dayjs };
  onChange: (range: { start: Dayjs; end: Dayjs }) => void;
  BoxClassName?: string;
  active?: string;
}

export type DatePickerOption = {
  minDate?: any;
  maxDate?: any;
};

export interface CommonValidationDatePickerProps extends DatePickerOption {
  name: string;
  disabled?: boolean;
  grid?: GridType;
  required?: boolean;
  label?: string;
}

export interface CommonDatePickerProps extends CommonValidationDatePickerProps {
  value: any;
  onChange: (value: any) => void;
}

// ************ Date Range Selector End ***********

// ************ Table Start ***********

export interface Params {
  [key: string]: any;
}

export interface UseDataGridOptions {
  page?: number;
  pageSize?: number;
  initialSort?: GridSortModel;
  initialFilter?: GridFilterModel;
  active?: boolean;
}

export interface CommonDataGridProps {
  columns: GridColDef[];
  rows: any[];
  rowCount: number;
  loading?: boolean;

  handleAdd?: () => void;

  isActive?: boolean;
  setActive?: (active: boolean) => void;

  // Pagination
  paginationModel: GridPaginationModel;
  onPaginationModelChange: (model: GridPaginationModel) => void;

  // Sorting
  sortModel: GridSortModel;
  onSortModelChange: (model: GridSortModel) => void;

  // Filter
  filterModel: GridFilterModel;
  onFilterModelChange: (model: GridFilterModel) => void;

  pageSizeOptions?: number[];
  defaultHidden?: string[];
  BoxClass?: string;
}

export interface CustomToolbarProps {
  apiRef: any;
  columns: GridColDef[];
  rows: GridRowsProp;
  rowCount: number;
  handleAdd?: () => void;
  isActive?: boolean;
  setActive?: (active: boolean) => void;
}

export interface ExportToExcelProps<T extends GridValidRowModel> {
  columns: readonly GridColDef[];
  rows: readonly T[];
  fileName?: string;
}

export interface ExportToPDFProps<T extends GridValidRowModel> {
  columns: readonly GridColDef[];
  rows: readonly T[];
  fileName?: string;
}

// ************ Table End ***********

// ************ Input Start ***********

export interface CommonValidationTextFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  isFormLabel?: boolean;
  grid?: GridType;
  validating?: boolean;
  clearable?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  showPasswordToggle?: boolean;
  disabled?: boolean;
  onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void;
  helperText?: string;
  multiline?: boolean;
  isCurrency?: boolean;
  color?: TextFieldProps["color"];
  focused?: boolean;
  readOnly?: boolean;
}
export interface CommonTextFieldProps extends Omit<CommonValidationTextFieldProps, "name"> {
  value: string;
  onChange?: (value: string) => void;
}

// ************ Input End ***********

// ************ Button Start ***********

export interface CommonButtonProps extends ButtonProps {
  loading?: boolean;
  loadingPosition?: "start" | "end";
  disabled?: boolean;
  title?: string;
  grid?: GridType;
  sx?: object;
  children?: ReactNode;
}

// ************ Button End ***********

// ************ Breadcrumb Start ***********

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbHeaderProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  maxItems?: number;
}

// ************ Breadcrumb Start ***********

// ************ Validation Yup schema Start ***********

export type FieldSchemaArgs<K extends keyof FieldTypeMap> = [type: K, options?: FieldOptions<FieldTypeMap[K]>] | [type: K, label: string, options?: FieldOptions<FieldTypeMap[K]>];

export type FieldTypeMap = {
  string: Yup.StringSchema<string | null | undefined>;
  number: Yup.NumberSchema<number | null | undefined>;
  boolean: Yup.BooleanSchema<boolean | null | undefined>;
  array: Yup.ArraySchema<any[], Yup.AnyObject>;
};

export interface FieldOptions<T> {
  required?: boolean;
  extraRules?: (schema: T) => T;
  minItems?: number;
}

// ************ Validation Yup schema End ***********

// ************ Notification Start ***********

export type MuiNotificationType = "success" | "info" | "warning" | "error";

// ************ Notification End ***********

// ************ Common Api Data Type Start ***********

export interface PageState {
  page: number;
  limit: number;
  totalPages: number;
}

export interface PageStatus {
  totalData: number;
  state: PageState;
}

export interface MessageStatus {
  status: number;
  message: string;
  error: Record<string, unknown>;
}

export interface CommonDataType {
  _id: string;
  isDeleted: boolean;
  createdBy: null;
  updatedBy: null;
  createdAt: string;
  updatedAt: string;
}

// ************ Common Api Data Type End ***********

// ************ Common Switch Start ***********

export interface CommonValidationSwitchProps {
  name: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  isFormLabel?: boolean;
  grid?: GridType;
  switchPlacement?: "start" | "between";
}

export interface CommonSwitchProps extends CommonValidationSwitchProps {
  // For NON-FORMIK switch
  value?: boolean;
  onChange?: (val: boolean) => void;
}

// ************ Common Switch End ***********

// ************ Upload Start ***********

export interface CommonUploadProps {
  title?: string;
  type?: "image" | "pdf";
}

export interface UploadResponse extends MessageStatus {
  data: string[];
}

// ************ Upload End ***********

// ************ Delete Start ***********

export interface CommonDeleteModalProps {
  open: boolean;
  title?: string;
  description?: string;
  itemName?: string;
  loading?: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

// ************ Delete End ***********

// ************ Bottom Action Bar Start ***********

export interface CommonBottomActionBarProps {
  children?: ReactNode;
  isLoading?: boolean;
  save?: boolean;
}
// ************ Bottom Action Bar End ***********

// ************ Modal Start ***********

export interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
  showCloseButton?: boolean;
  isFullscreen?: boolean;
  title?: string;
  subTitle?: string;
}

type UploadType = "image" | "pdf";

export interface ModalStateSlice {
  isUploadModal: { open: boolean; type: UploadType };
  selectedFiles: string[];
  isModalVideoPlay: { open: boolean; link: string };
  isCustomerModal: { open: boolean; data: CustomerFormValues | null };
  isPaymentListModal: boolean;
  isAddPaymentModal: boolean;
  isRedeemLoyaltyModal: boolean;
  isCreditNoteModal: boolean;
  isOrderModal: boolean;
  isCashControlModal: boolean;
  isCouponModal: boolean;
  isRedeemCreditModal: boolean;
  isCardModal: boolean;
  isApplyCouponModal: boolean;
  isPayLaterModal: boolean;
  isCashModal: boolean;
  isAdditionalChargeModal: boolean;
}

// ************ Modal End ***********

// ************ Radio start ***********

export type RadioOptionType = {
  label: string;
  value: string;
};

export interface CommonRadioProps {
  label?: string;
  value: string;
  options: RadioOptionType[];
  onChange: (value: string) => void;
  row?: boolean;
  disabled?: boolean;
  grid?: GridType;
}

export interface CommonValidationRadioProps extends Omit<CommonRadioProps, "value" | "onChange"> {
  name: string;
  required?: boolean;
}

// ************ Radio End ***********
