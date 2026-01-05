import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "./Slices/LayoutSlice";
import AuthSlice from "./Slices/AuthSlice";
import ModalSlice from "./Slices/ModalSlice";
import CompanySlice from "./Slices/CompanySlice";
import DrawerSlice from "./Slices/DrawerSlice";
import PosSlice from "./Slices/PosSlice";

const Store = configureStore({
  reducer: {
    layout: LayoutSlice,
    auth: AuthSlice,
    modal: ModalSlice,
    company: CompanySlice,
    drawer: DrawerSlice,
    pos: PosSlice,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
