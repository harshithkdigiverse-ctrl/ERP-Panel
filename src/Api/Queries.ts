import { KEYS, URL_KEYS } from "../Constants";
import type { AnnouncementApiResponse, AppQueryOptions, BranchApiResponse, EmployeeApiResponse, Params, ProductApiResponse, RolesApiResponse, UploadResponse } from "../Types";
import type { BrandApiResponse } from "../Types/Brand";
import type { CompanyApiResponse } from "../Types/Company";
import { CleanParams } from "../Utils";
import { Get } from "./Methods";
import { useQueries } from "./ReactQuery";

export const Queries = {
  // ************ Upload ***********
  useGetUploadImage: (options?: AppQueryOptions<UploadResponse>) => useQueries<UploadResponse>([KEYS.UPLOAD.ALL_IMAGE], () => Get(URL_KEYS.UPLOAD.ALL_IMAGE), options),
  useGetUploadPdf: (options?: AppQueryOptions<UploadResponse>) => useQueries<UploadResponse>([KEYS.UPLOAD.ALL_PDF], () => Get(URL_KEYS.UPLOAD.ALL_PDF), options),

  // ************ User ***********
  useGetUserdata: (id?: string) => useQueries<EmployeeApiResponse>([KEYS.USER.BASE], () => Get(`${URL_KEYS.USER.BASE}/${id}`), { enabled: !!id }),

  // ************ Company ***********
  useGetSingleCompany: (id?: string) => useQueries<CompanyApiResponse>([KEYS.COMPANY.BASE, id], () => Get(`${URL_KEYS.COMPANY.BASE}/${id}`), { enabled: !!id }),

  // ************ Employee ***********
  useGetEmployee: (params?: Params) => useQueries<EmployeeApiResponse>([KEYS.EMPLOYEE.BASE, params], () => Get(URL_KEYS.EMPLOYEE.ALL, params)),

  // ************ Branch ***********

  useGetBranch: (params?: Params) => useQueries<BranchApiResponse>([KEYS.BRANCH.BASE, params], () => Get(URL_KEYS.BRANCH.ALL, params)),

   // ************ Branch ***********

  useGetBrand: (params?: Params) => useQueries<BrandApiResponse>([KEYS.BRAND.BASE, params], () => Get(URL_KEYS.BRAND.ALL, params)),

  // ************ Roles ***********

  useGetRoles: (params?: Params) => useQueries<RolesApiResponse>([KEYS.ROLES.BASE, params], () => Get(URL_KEYS.ROLES.ALL, params)),

  // ************ Announcement ***********

  useGetAnnouncement: () => useQueries<AnnouncementApiResponse>([KEYS.ANNOUNCEMENT.BASE], () => Get(URL_KEYS.ANNOUNCEMENT.ALL)),

  //***************product**************** */
  useGetProduct: (params?: Params) => useQueries<any>([KEYS.PRODUCT.BASE, params], () => Get(URL_KEYS.PRODUCT.ALL, params)),


  // ************ Stock ***********

  useGetAllStockData: (params?: Params) => {
    const cleanedParams = CleanParams(params);

    return useQueries<any>([KEYS.STOCK.ALL, cleanedParams], () => Get(URL_KEYS.STOCK.ALL, cleanedParams), { placeholderData: (previousData: any) => previousData });
  },
  // ************ Stock ***********
  useGetAllProductData: (params?: Params) => {
    const cleanedParams = CleanParams(params);
    return useQueries<any>([KEYS.PRODUCT.ALL, cleanedParams], () => Get(URL_KEYS.PRODUCT.ALL, cleanedParams), { placeholderData: (previousData: any) => previousData });
  },

  // ************ payment*
  // useGetPayments: (params?: Params) =>useQueries<PaymentApiResponse>([KEYS.PAYMENT.BASE, params],() => Get(URL_KEYS.PAYMENT.ALL, params),),

  // ************ product*
  useGetProduct: (params?: Params) => useQueries<ProductApiResponse>([KEYS.PRODUCT.ALL, params], () => Get(URL_KEYS.PRODUCT.ALL, params)),

  //************ bank ********/

  useGetBank: (params?: Params) => useQueries<any>([KEYS.BANK.BASE, params], () => Get(URL_KEYS.BANK.ALL, params), { placeholderData: (previousData: any) => previousData }),
};
