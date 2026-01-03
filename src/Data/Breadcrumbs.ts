import { PAGE_TITLE } from "../Constants";
import { ROUTES } from "../Constants";

export const GeneralSettingBreadcrumbs = [{ label: PAGE_TITLE.SETTINGS.GENERAL }];

export const BREADCRUMBS = {
  EMPLOYEE: {
    BASE: [{ label: PAGE_TITLE.EMPLOYEE.BASE }],
    ADD: [{ label: PAGE_TITLE.EMPLOYEE.BASE, href: ROUTES.EMPLOYEE.BASE }, { label: PAGE_TITLE.EMPLOYEE.ADD }],
    EDIT: [{ label: PAGE_TITLE.EMPLOYEE.BASE, href: ROUTES.EMPLOYEE.BASE }, { label: PAGE_TITLE.EMPLOYEE.EDIT }],
  },
  PRODUCT: {
    BASE: [{ label: PAGE_TITLE.INVENTORY.PRODUCT.BASE }],
    ADD: [{ label: PAGE_TITLE.INVENTORY.PRODUCT.BASE, href: ROUTES.PRODUCT.BASE }, { label: PAGE_TITLE.INVENTORY.PRODUCT.ADD }],
    EDIT:[{ label: PAGE_TITLE.INVENTORY.PRODUCT.BASE, href: ROUTES.PRODUCT.BASE }, { label: PAGE_TITLE.INVENTORY.PRODUCT.EDIT }],
  },
    BRAND: {
    BASE: [{ label: PAGE_TITLE.INVENTORY.BRAND.BASE }],
    ADD: [{ label: PAGE_TITLE.INVENTORY.BRAND.BASE, href: ROUTES.BRAND.BASE }, { label: PAGE_TITLE.INVENTORY.BRAND.ADD }],
    EDIT:[{ label: PAGE_TITLE.INVENTORY.BRAND.BASE, href: ROUTES.BRAND.BASE }, { label: PAGE_TITLE.INVENTORY.BRAND.EDIT }],
  },
  BRANCH: {
    BASE: [{ label: PAGE_TITLE.BRANCH.BASE }],
    ADD: [{ label: PAGE_TITLE.BRANCH.BASE, href: ROUTES.BRANCH.BASE }, { label: PAGE_TITLE.BRANCH.ADD }],
    EDIT: [{ label: PAGE_TITLE.BRANCH.BASE, href: ROUTES.BRANCH.BASE }, { label: PAGE_TITLE.BRANCH.EDIT }],
  },
  PAYMENT: {
    BASE: [{ label: PAGE_TITLE.PAYMENT.BASE }],
    ADD: [{ label: PAGE_TITLE.PAYMENT.BASE, href: ROUTES.PAYMENT.BASE }, { label: PAGE_TITLE.PAYMENT.ADD }],
    EDIT: [{ label: PAGE_TITLE.PAYMENT.BASE, href: ROUTES.PAYMENT.BASE }, { label: PAGE_TITLE.PAYMENT.EDIT }],
  },
  GENERAL_SETTING: {
    BASE: [{ label: PAGE_TITLE.SETTINGS.GENERAL }],
    COMPANY: [{ label: PAGE_TITLE.SETTINGS.GENERAL, href: ROUTES.SETTINGS.GENERAL }, { label: PAGE_TITLE.SETTINGS.COMPANY.EDIT }],
    USER: [{ label: PAGE_TITLE.SETTINGS.GENERAL, href: ROUTES.SETTINGS.GENERAL }, { label: PAGE_TITLE.SETTINGS.USER.EDIT }],
  },

};

export const BranchFormBreadcrumbs = [{ label: ROUTES.BRANCH.ADD_EDIT }];
export const ProductBreadcrumbs = [{ label: ROUTES.PRODUCT.BASE }];
export const ProductFormBreadcrumbs = [{ label: ROUTES.PRODUCT.ADD_EDIT }];
export const BrandBreadcrumbs = [{ label: ROUTES.BRAND.BASE }];
export const BrandFormBreadcrumbs = [{ label: ROUTES.BRAND.ADD_EDIT }];
export const StockBreadcrumbs = [{ label: ROUTES.STOCK.BASE }];
export const BankBreadCrumbs = [{ label: PAGE_TITLE.BANK.BANK.BASE }];
export const BankFormBreadCrumbs = [{ label: PAGE_TITLE.BANK.BANK.ADDEDIT }];
export const transactionBreadCrumbs = [{ label: PAGE_TITLE.TRANSACTION.BASE }];
