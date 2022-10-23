import { createSlice } from '@reduxjs/toolkit';

interface commonUpdateRegisterState {
  imageData: null | string;
  productTextData: string;
  classifying: string;
  registerDate: string;
  keepMethodTextData: string;
  registerMemo: string;
  isDataChange: boolean;
  beforeData: boolean;
}

export const commonRegisterState: commonUpdateRegisterState = {
  /** 商品画像 */
  imageData: null,
  /** 商品名 */
  productTextData: '',
  /** 分類 */
  classifying: '',
  /** 日付のデータ */
  registerDate: '',
  /** 保存方法 */
  keepMethodTextData: '',
  /** メモ */
  registerMemo: '',
  /** 初期のデータから変更があるかどうかのフラグ */
  isDataChange: false,
  /** 初期値のデータに戻すフラグ */
  beforeData: false,
};

export const commonRegisterSlice = createSlice({
  name: 'commonRegister',
  initialState: commonRegisterState,
  reducers: {
    setImageData: (state, { payload }) => {
      state.imageData = payload;
    },
    setProductTextData: (state, { payload }) => {
      state.productTextData = payload;
    },
    setClassifying: (state, { payload }) => {
      state.classifying = payload;
    },
    setRegisterDate: (state, { payload }) => {
      state.registerDate = payload;
    },
    setKeepMethodTextData: (state, { payload }) => {
      state.keepMethodTextData = payload;
    },
    setRegisterMemo: (state, { payload }) => {
      state.registerMemo = payload;
    },
    setIsDataChange: (state, { payload }) => {
      state.isDataChange = payload;
    },
    setBeforeData: (state, { payload }) => {
      state.beforeData = payload;
    },
  },
});

export const {
  setImageData,
  setProductTextData,
  setClassifying,
  setRegisterDate,
  setKeepMethodTextData,
  setRegisterMemo,
  setIsDataChange,
  setBeforeData,
} = commonRegisterSlice.actions;
