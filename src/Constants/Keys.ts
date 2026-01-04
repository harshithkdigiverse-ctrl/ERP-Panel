export const KEYS = {
  AUTH: {
    SIGNIN: "admin-signin",
  },

  UPLOAD: {
    ALL_IMAGE: "upload-image",
    ALL_PDF: "upload-pdf",
    ADD: "upload",
    DELETE: "upload-delete",
  },

  USER: {
    BASE: "user",
    EDIT: "user-edit"
  },

  COMPANY: {
    BASE: "company",
    EDIT: "company-edit",
  },

  EMPLOYEE: {
    BASE: "employee",
    ADD: "employee-add",
    EDIT: "employee-edit",
    DELETE: "employee-delete",
  },

  BRANCH: {
    BASE: "branch",
    ADD: "branch-add",
    EDIT: "branch-edit",
    DELETE: "branch-delete",
  },
  BRAND: {
    BASE: "brand",
    ADD: "brand-add",
    EDIT: "brand-edit",
    DELETE: "brand-delete",
  },

  ROLES: {
    BASE: "role",
    ADD: "role-add",
    EDIT: "role-edit",
    DELETE: "role-delete",
  },

  ANNOUNCEMENT: {
    BASE: "announcement",
  },

  PRODUCT: {
    BASE: "product",
    ROOT: ["product"],
    ALL: ["product", "all"],
    DETAILS: (id: string) => ["product", "detail", id],
    ADD: ["product", "add"],
    EDIT: ["product", "edit"],
    DELETE: ["product", "delete"], // mutation
  },
  STOCK: {
    ROOT: ["stock"],
    ALL: ["stock", "all"],
    DETAILS: (id: string) => ["stock", "detail", id],
  },
  CALL_REQUEST: {
    ROOT: ["call-request"],
    ADD: "call-request",
  },
  BANK: {
    BASE: ["bank"],
    ALL: ["bank", "all"],
    ADD: ["bank", "add"],
    EDIT: ["bank", "edit"],
    DELETE: ["bank", "delete"],
  },
  PAYMENT: {
    BASE: ["payment"],
    ADD: ["payment", "add"],
    EDIT: ["payment", "edit"],
    DELETE: ["payment", "delete"],
  },
};
