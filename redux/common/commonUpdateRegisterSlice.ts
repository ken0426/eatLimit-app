import { createSlice } from '@reduxjs/toolkit';

interface commonUpdateRegisterState {
  imageData: null | string;
}

export const commonUpdateRegisterState: commonUpdateRegisterState = {
  imageData: null,
};

export const commonUpdateRegisterSlice = createSlice({
  name: 'commonUpdateRegisterSlice',
  initialState: commonUpdateRegisterState,
  reducers: {
    setImageData: (state, { payload }) => {
      state.imageData = payload;
    },
  },
});

export const { setImageData } = commonUpdateRegisterSlice.actions;
