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
    // eatImage: require('../moc/mocImages/ra-yuokazu.jpeg'),
    eatImage: 'https://cdn.sbfoods.co.jp/products/16559_1_l.jpg',
    key: 1,
  },
  {
    eatName: 'にんじん',
    limitDate: '2022/10/10',
    registerDate: '2022/8/13',
    limitTextData: 'expiry',
    label: 7,
    labelName: 'normal',
    eatImage:
      'https://media.delishkitchen.tv/article/1100/eco9bggfutt.jpeg?version=1636508482',
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
    eatIMage:
      'https://image.itmedia.co.jp/business/articles/2110/31/kk_tama_00.jpg',
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
    // eatImage: require('../moc/mocImages/gyuunyuu.jpeg'),
    eatImage:
      'https://www.meiji.co.jp/products/milk_drink/assets/img/4902705029354.jpg',
    key: 6,
  },
  {
    eatName: 'ヨーグルト',
    limitDate: '2022/8/17',
    registerDate: '2022/8/13',
    limitTextData: 'expiration',
    label: 5,
    labelName: 'refrigeration',
    // eatImage: require('../moc/mocImages/yo-guruto.jpeg'),
    eatImage:
      'https://chiik.jp/wp-content/uploads/migration/item_products/images/000/156/274/medium/73ecda7c-c40b-44fa-b6f7-f50711fd8fac.jpg?1587577920',
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
    // eatImage: require('../moc/mocImages/nattou.jpeg'),
    eatImage:
      'https://p1-e6eeae93.imageflux.jp/c!/f=jpg,w=1200,u=0/mkdirect/44ad107de29c650eed06.jpg',
    key: 17,
  },
];
