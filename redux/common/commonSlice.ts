import { createSlice } from '@reduxjs/toolkit';

interface commonState {
  isAlertModal: boolean;
}

export const commonState: commonState = {
  /** モーダルの表示 */
  isAlertModal: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState: commonState,
  reducers: {
    setIsAlertModal: (state, { payload }) => {
      state.isAlertModal = payload;
    },
  },
});

export const { setIsAlertModal } = commonSlice.actions;
