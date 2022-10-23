import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../../styles';

/**
 * @param {string}    buttonName        ボタンの名前
 * @param {boolean}   selectButton      ボタンにチェックが付いているか判定するフラグ
 * @param {boolean}   categoryMargin    絞り込みボタンのボトム
 */

interface DisplayOrderButtonProps {
  buttonName: string;
  key: number;
  selectButton: boolean | undefined;
  onPress: () => void;
  categoryMargin?: boolean;
}

const DisplayOrderButton: React.FC<DisplayOrderButtonProps> = ({
  buttonName,
  key,
  selectButton,
  onPress,
  categoryMargin,
}) => {
  return (
    <View
      style={[
        styles.homeModalSelectButton,
        {
          backgroundColor: selectButton
            ? theme.colors.rightBlue
            : theme.colors.white,
          borderWidth: !selectButton && 1,
          borderColor: !selectButton && theme.colors.rightBlue,
          marginBottom: categoryMargin && 20,
        },
      ]}
    >
      <TouchableOpacity
        style={[
          theme.maxSize,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
        key={key}
        onPress={onPress}
      >
        <Text
          style={{
            color: selectButton ? theme.colors.white : theme.colors.rightBlue,
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

const styles = StyleSheet.create({
  homeModalSelectButton: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 40,
  },
});

export default DisplayOrderButton;
