export const URL_KEYS = {
  AUTH: {
    SIGNIN: "/auth/login",
  },
  UPLOAD: {
    ADD: "/upload",
    DELETE: "/upload",
    ALL_IMAGE: "/upload/images",
    ALL_PDF: "/upload/pdf",
  },
  USER: {
    BASE: "/user",
    EDIT: "/user/edit",
  },
  COMPANY: {
    BASE: "/company",
    ALL: "/company/all",
    ADD: "/company/add",
    EDIT: "/company/edit",
  },
  EMPLOYEE: {
    BASE: "/user",
    ALL: "/user/all",
    ADD: "/user/add",
    EDIT: "/user/edit",
  },

  BRANCH: {
    BASE: "/branch",
    ALL: "/branch/all",
    ADD: "/branch/add",
    EDIT: "/branch/edit",
  },
  BRAND: {
    BASE: "/brand",
    ALL: "/brand/all",
    ADD: "/brand/add",
    EDIT: "/brand/edit",
  },

  ROLES: {
    BASE: "/role",
    ALL: "/role/all",
    ADD: "/role/add",
    EDIT: "/role/edit",
  },

  ANNOUNCEMENT: {
    ALL: "/announcement/all",
  },

  PRODUCT: {
    BASE: "/product",
    ADD: "/product/add",
    ALL: "/product/all",
    // ONE: (id: string) => `/product/${id}`,
    EDIT: "Product/edit",
  },

  STOCK: {
    BASE: "/stock",
    ALL: "/stock/all",
    ONE: (id: string) => `/stock/${id}`,
  },

  CALL_REQUEST: {
    BASE: "/call-request",
    ADD: "/call-request/add",
  },
  BANK: {
    BASE: "/bank",
    ADD: "/bank/add",
    EDIT: "/bank/edit",
    ALL: "/bank/all",
  },
  PAYMENT: {
    BASE: "/payment",
    ADD: "/payment/add",
    EDIT: "/payment/edit",
    ALL: "/payment/all",
  },
} as const;
