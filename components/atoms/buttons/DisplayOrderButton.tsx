import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

/**
 * @param {string}    buttonName        ボタンの名前
 * @param {boolean}   sort              ソート機能のボタンとフィルターボタンで幅が違うフラグ
 * @param {boolean}   selectButton      ボタンにチェックが付いているか判定するフラグ
 * @param {boolean}   categoryMargin    カテゴリボタンのUI（左右間隔）
 * @param {boolean}   right             カテゴリボタンの右にmarginを取る
 * @param {boolean}   left              カテゴリボタンの左にmarginを取る
 */

interface DisplayOrderButtonProps {
  buttonName: string;
  key: number;
  sort: boolean | undefined;
  selectButton: boolean | undefined;
  onPress: () => void;
  categoryMargin: boolean | undefined;
  right: boolean | undefined;
  left: boolean | undefined;
}

const DisplayOrderButton: React.FC<DisplayOrderButtonProps> = ({
  buttonName,
  key,
  sort,
  selectButton,
  onPress,
  categoryMargin,
  right,
  left,
}) => {
  return (
    <View
      style={{
        backgroundColor: selectButton ? '#94DFF5' : 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: sort ? 130 : 85,
        height: 30,
        borderWidth: !selectButton && 1,
        borderColor: !selectButton && '#94DFF5',
        marginBottom: categoryMargin && 20,
        marginRight: right && 22,
        marginLeft: left && 22,
      }}
    >
      <TouchableOpacity
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        key={key}
        onPress={onPress}
      >
        <Text
          style={{
            color: selectButton ? 'white' : '#94DFF5',
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          {buttonName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DisplayOrderButton;
