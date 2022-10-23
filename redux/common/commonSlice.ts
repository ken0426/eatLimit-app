import { createSlice } from '@reduxjs/toolkit';

interface commonState {
  isAlertModal: boolean;
  isDataChange: boolean;
  beforeData: boolean;
}

export const commonState: commonState = {
  /** モーダルの表示 */
  isAlertModal: false,
  /** 初期のデータから変更があるかどうかのフラグ */
  isDataChange: false,
  /** 初期値のデータに戻すフラグ */
  beforeData: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState: commonState,
  reducers: {
    setIsAlertModal: (state, { payload }) => {
      state.isAlertModal = payload;
    },
    setIsDataChange: (state, { payload }) => {
      state.isDataChange = payload;
    },
    setBeforeData: (state, { payload }) => {
      state.beforeData = payload;
    },
  },
});

export const { setIsAlertModal, setIsDataChange, setBeforeData } =
  commonSlice.actions;
