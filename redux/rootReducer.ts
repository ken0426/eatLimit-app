import { combineReducers } from 'redux';
import { commonUpdateRegisterSlice } from './common/commonUpdateRegisterSlice';

export const rootReducer = combineReducers({
  common: commonUpdateRegisterSlice.reducer,
});
