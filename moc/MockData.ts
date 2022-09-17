// eatName: 商品名
// expiration: 消費期限
// expiry: 賞味期限
// purchase: 購入日
// register: 登録日
// eatImage: 商品画像
// label: 5（冷蔵）
// label: 6（冷凍）
// label: 7（常温）

/** 空のリストデータ */
export const noEatMocData = [];

/** リストのデータ */
export const eatMockData = [
  {
    eatName: 'おかずラー油',
    limitDate: '2023/9/28',
    registerDate: '2022/8/13',
    limitTextData: 'expiry',
    label: 5,
    labelName: 'refrigeration',
    eatImage: require('../moc/mocImages/ra-yuokazu.jpeg'),
    key: 1,
  },
  {
    eatName: 'にんじん',
    limitDate: '2022/10/10',
    registerDate: '2022/8/13',
    limitTextData: 'expiry',
    label: 7,
    labelName: 'normal',
    key: 2,
  },
  {
    eatName: 'うどん',
    limitDate: '2022/8/14',
    registerDate: '2022/8/13',
    limitTextData: 'expiration',
    label: 5,
    labelName: 'refrigeration',
    key: 3,
  },
  {
    eatName: '卵',
    registerDate: '2022/8/13',
    limitTextData: 'purchase',
    label: 5,
    labelName: 'refrigeration',
    key: 4,
  },
  {
    eatName: 'スイカ',
    limitDate: '2022/8/15',
    registerDate: '2022/8/13',
    limitTextData: 'expiration',
    label: 5,
    labelName: 'refrigeration',
    key: 5,
  },
  {
    eatName: '牛乳',
    limitDate: '2022/8/16',
    registerDate: '2022/8/13',
    limitTextData: 'expiration',
    label: 5,
    labelName: 'refrigeration',
    eatImage: require('../moc/mocImages/gyuunyuu.jpeg'),
    key: 6,
  },
  {
    eatName: 'ヨーグルト',
    limitDate: '2022/8/17',
    registerDate: '2022/8/13',
    limitTextData: 'expiration',
    label: 5,
    labelName: 'refrigeration',
    eatImage: require('../moc/mocImages/yo-guruto.jpeg'),
    key: 7,
  },
  {
    eatName: 'りんご',
    limitDate: '2022/8/18',
    registerDate: '2022/8/13',
    limitTextData: 'expiration',
    label: 5,
    labelName: 'refrigeration',
    key: 8,
  },
  {
    eatName: 'たらこ',
    limitDate: '2022/8/19',
    registerDate: '2022/3/13',
    limitTextData: 'expiration',
    label: 5,
    labelName: 'refrigeration',
    key: 9,
  },
  {
    eatName: 'スーパーカップ',
    limitDate: '2022/8/20',
    registerDate: '2022/2/1',
    limitTextData: 'expiration',
    label: 6,
    labelName: 'frozen',
    key: 10,
  },
  {
    eatName: 'テスト商品A',
    limitDate: '2022/8/21',
    registerDate: '2022/9/3',
    limitTextData: 'expiration',
    label: 6,
    labelName: 'frozen',
    key: 11,
  },
  {
    eatName: 'テスト商品B',
    // limitDate: '2022/9/3',
    registerDate: '2022/8/13',
    limitTextData: 'purchase',
    label: 7,
    labelName: 'normal',
    key: 12,
  },
  {
    eatName: 'テスト商品（登録系）',
    registerDate: '2022/1/1',
    limitTextData: 'register',
    label: 7,
    labelName: 'normal',
    key: 13,
  },
  {
    eatName: 'テスト商品D',
    registerDate: '2022/7/1',
    limitTextData: 'register',
    label: 7,
    labelName: 'normal',
    key: 14,
  },
  {
    eatName: 'テスト商品E',
    registerDate: '2022/7/1',
    limitTextData: 'register',
    label: 7,
    labelName: 'normal',
    key: 15,
  },
  {
    eatName: 'テスト商品あああああああああああああ',
    limitDate: '2021/10/10',
    registerDate: '2022/10/10',
    limitTextData: 'expiration',
    label: 7,
    labelName: 'normal',
    key: 16,
  },
  {
    eatName: '納豆',
    limitDate: '2022/8/27',
    registerDate: '2022/8/18',
    limitTextData: 'expiration',
    label: 5,
    labelName: 'refrigeration',
    eatImage: require('../moc/mocImages/nattou.jpeg'),
    key: 17,
  },
];
