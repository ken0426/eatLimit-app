import { createSlice } from '@reduxjs/toolkit';

interface commonUpdateRegisterState {
  imageData: null | string;
}

export const commonRegisterState: commonUpdateRegisterState = {
  imageData: null,
};

export const commonRegisterSlice = createSlice({
  name: 'commonRegisterSlice',
  initialState: commonRegisterState,
  reducers: {
    setImageData: (state, { payload }) => {
      state.imageData = payload;
    },
  },
});

export const { setImageData } = commonRegisterSlice.actions;
