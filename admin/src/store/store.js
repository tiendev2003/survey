import { configureStore } from '@reduxjs/toolkit';
import khaosatReducer from '../features/khaosat/khaosatSlice';
import cauhoiReducer from '../features/cauhoi/cauhoiSlice';
import khoaReducer from '../features/khoa/khoaSlice';
import lophocReducer from '../features/lop/lophocSlice';
import userReducer from '../features/user/userSlice';
export const store = configureStore({
  reducer: {
    khaosat: khaosatReducer,
    cauhoi: cauhoiReducer,
    khoas: khoaReducer,
    lophocs: lophocReducer,
    users: userReducer,
  },
});