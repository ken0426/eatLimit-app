import { combineReducers } from 'redux';
import { commonRegisterSlice } from './common/commonRegisterSlice';

export const rootReducer = combineReducers({
  common: commonRegisterSlice.reducer,
});
