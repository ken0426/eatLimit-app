import { combineReducers } from 'redux';
import { commonRegisterSlice } from './common/commonRegisterSlice';
import { commonSlice } from './common/commonSlice';

export const rootReducer = combineReducers({
  common: commonSlice.reducer,
  commonRegister: commonRegisterSlice.reducer,
});
