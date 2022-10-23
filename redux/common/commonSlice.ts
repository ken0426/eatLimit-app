import { createSlice } from '@reduxjs/toolkit';

interface commonState {
  isAlertModal: boolean;
  selectScreen: string;
}

export const commonState: commonState = {
  /** モーダルの表示 */
  isAlertModal: false,
  /** 現在どの画面にいるか判断するredux */
  selectScreen: '',
};

export const commonSlice = createSlice({
  name: 'common',
  initialState: commonState,
  reducers: {
    setIsAlertModal: (state, { payload }) => {
      state.isAlertModal = payload;
    },
    setSelectScreen: (state, { payload }) => {
      state.selectScreen = payload;
    },
  },
});

export const { setIsAlertModal, setSelectScreen } = commonSlice.actions;
