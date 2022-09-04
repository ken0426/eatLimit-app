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
];

/** モーダルの画像選択で使用するボタン */
export const displayOrderIsImageButton = [
  { buttonName: '画像あり', option: true },
  { buttonName: '画像なし', option: false },
];

/** カテゴリボタンのID */
export const CATEGORY_ID = {
  expiration: 1,
  expiry: 2,
  purchase: 3,
  register: 4,
};

/** ラベルID
 * @param {number} refrigeration  1:冷蔵
 * @param {number} frozen         2:冷凍
 * @param {number} normal         3:常温
 */
export const LABEL_ID = {
  refrigeration: 1,
  frozen: 2,
  normal: 3,
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
