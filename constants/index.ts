/** モーダルの表示順とカテゴリで使用するボタン */
export const displayOrderButton = [
  { buttonName: '消費期限/賞味期限', option: true },
  { buttonName: '購入日/登録日', option: false },
];

/** モーダルの日付表示 */
export const displayOrderDayButton = [
  { buttonName: '日付のみ', option: true },
  { buttonName: '日付＋年', option: false },
];

/** モーダルのカテゴリ表示で使用するボタン */
export const displayOrderCategoryButton = [
  { buttonName: '消費期限', id: 1 },
  { buttonName: '賞味期限', id: 2 },
  { buttonName: '購入日', id: 3 },
  { buttonName: '登録日', id: 4 },
  { buttonName: '冷蔵', id: 5 },
  { buttonName: '冷凍', id: 6 },
  { buttonName: '常温', id: 7 },
  { buttonName: '期限切れ', id: 8 },
];

/** モーダルの画像選択で使用するボタン */
export const displayOrderIsImageButton = [
  { buttonName: '画像あり', option: true },
  { buttonName: '画像なし', option: false },
];

/** モーダルのラベルで選択しようするボタン */
export const displayOrderLabelButton = [
  { buttonName: 'ラベルあり', option: true },
  { buttonName: 'ラベルなし', option: false },
];

/** カテゴリボタンのID */
export const CATEGORY_ID = {
  expiration: 1,
  expiry: 2,
  purchase: 3,
  register: 4,
  refrigeration: 5,
  frozen: 6,
  normal: 7,
  expired: 8,
};

/** ラベルID
 * @param {number} refrigeration  1:冷蔵
 * @param {number} frozen         2:冷凍
 * @param {number} normal         3:常温
 */
export const LABEL_ID = {
  refrigeration: 5,
  frozen: 6,
  normal: 7,
};

/** ラベルの名前
 * @param {string} refrigeration   冷蔵
 * @param {string} frozen          冷凍
 * @param {string} normal          常温
 */
export const LABEL_NAME = {
  refrigeration: '冷蔵',
  frozen: '冷凍',
  normal: '常温',
};

/** 分類で使用するボタンデータ */
export const classificationData = [
  { buttonName: '消費期限' },
  { buttonName: '賞味期限' },
  { buttonName: '購入日' },
  { buttonName: '登録日' },
];

/** 保存方法で使用するボタンのデータ */
export const keepMethodData = [
  { buttonName: '冷蔵' },
  { buttonName: '冷凍' },
  { buttonName: '常温' },
];

/** 項目のデータ */
export const selectData = {
  classification: 'classification',
  keepMethod: 'keepMethod',
};
