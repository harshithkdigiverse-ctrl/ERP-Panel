import type { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface BrandFormValues {
  code?: string;
  name?: string;
  description?: string;
  parentBrandId?: string;
  image?: File | string | null;
  isActive?: boolean;
  _submitAction?: "save" | "saveAndNew";
}

export type AddBrandPayload = BrandFormValues & { companyId?: string };

export type EditBrandPayload = AddBrandPayload & { brandId: string };

export type BrandBase = BrandFormValues & CommonDataType;

export interface BrandDataResponse extends PageStatus {
  brand_data: BrandBase[];
}

export interface BrandApiResponse extends MessageStatus {
  data: BrandDataResponse;
}  
