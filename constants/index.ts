/** モーダルの表示順とカテゴリで使用するボタン */
export const displayOrderButton = [
  { buttonName: '消費期限/賞味期限', sort: true },
  { buttonName: '購入日/登録日', sort: true },
];

/** モーダルの日付表示 */
export const displayOrderDayButton = [
  { buttonName: '日付のみ', option: true },
  { buttonName: '日付＋年', option: false },
];

/** モーダルのカテゴリ表示で使用するボタン */
export const displayOrderCategoryButton = [
  { buttonName: '消費期限', id: 1, right: true },
  { buttonName: '賞味期限', id: 2, left: true },
  { buttonName: '購入日', id: 3, right: true },
  { buttonName: '登録日', id: 4, left: true },
  { buttonName: '冷蔵', id: 5, right: true },
  { buttonName: '冷凍', id: 6, left: true },
  { buttonName: '常温', id: 7 },
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
