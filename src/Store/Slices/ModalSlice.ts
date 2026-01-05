import { createSlice } from "@reduxjs/toolkit";
import type { ModalStateSlice } from "../../Types";

const initialState: ModalStateSlice = {
  isUploadModal: { open: false, type: "image" },
  selectedFiles: [],
  isModalVideoPlay: { open: false, link: "" },
  isCustomerModal: { open: false, data: null },
  isPaymentListModal: false,
  isAddPaymentModal: false,
  isRedeemLoyaltyModal: false,
  isCreditNoteModal: false,
  isOrderModal: false,
  isCashControlModal: false,
  isCouponModal: false,
  isRedeemCreditModal: false,
  isCardModal: false,
  isApplyCouponModal: false,
  isPayLaterModal: false,
  isCashModal: false,
  isAdditionalChargeModal: false,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setUploadModal: (state, action) => {
      state.isUploadModal = action.payload;
    },

    setSelectedFiles: (state, action) => {
      state.selectedFiles = action.payload;
    },

    clearSelectedFiles: (state) => {
      state.selectedFiles = [];
    },
    setModalVideoPlay(state, action) {
      state.isModalVideoPlay = action.payload;
    },
    setCustomerModal: (state, action) => {
      state.isCustomerModal = action.payload;
    },
    setPaymentListModal: (state) => {
      state.isPaymentListModal = !state.isPaymentListModal;
    },
    setAddPaymentModal: (state) => {
      state.isAddPaymentModal = !state.isAddPaymentModal;
    },
    setRedeemLoyaltyModal: (state) => {
      state.isRedeemLoyaltyModal = !state.isRedeemLoyaltyModal;
    },
    setCreditNoteModal: (state) => {
      state.isCreditNoteModal = !state.isCreditNoteModal;
    },
    setOrderModal: (state) => {
      state.isOrderModal = !state.isOrderModal;
    },
    setCashControlModal: (state) => {
      state.isCashControlModal = !state.isCashControlModal;
    },
    setCouponModal: (state) => {
      state.isCouponModal = !state.isCouponModal;
    },
    setRedeemCreditModal: (state) => {
      state.isRedeemCreditModal = !state.isRedeemCreditModal;
    },
    setCardModal: (state) => {
      state.isCardModal = !state.isCardModal;
    },
    setApplyCouponModal: (state) => {
      state.isApplyCouponModal = !state.isApplyCouponModal;
    },
    setPayLaterModal: (state) => {
      state.isPayLaterModal = !state.isPayLaterModal;
    },
    setCashModal: (state) => {
      state.isCashModal = !state.isCashModal;
    },
    setAdditionalChargeModal: (state) => {
      state.isAdditionalChargeModal = !state.isAdditionalChargeModal;
    },
  },
});

export const { setAdditionalChargeModal, setCashModal, setPayLaterModal, setApplyCouponModal, setUploadModal, setSelectedFiles, clearSelectedFiles, setModalVideoPlay, setCustomerModal, setPaymentListModal, setAddPaymentModal, setRedeemLoyaltyModal, setCreditNoteModal, setOrderModal, setCashControlModal, setCouponModal, setRedeemCreditModal, setCardModal } = ModalSlice.actions;

export default ModalSlice.reducer;
