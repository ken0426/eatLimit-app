import React, { useState } from 'react';
import {
  Image,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  ScrollView,
  ActionSheetIOS,
} from 'react-native';
import { theme } from '../styles';
import * as ImagePicker from 'expo-image-picker';

const RegisterScreen = () => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result: { uri?: string; cancelled: boolean } =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onPressAction = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['キャンセル', '写真を撮影', '写真を選択'],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // キャンセルのアクション
        } else if (buttonIndex === 1) {
          // カメラを起動
        } else if (buttonIndex === 2) {
          // ライブラリから写真を選択
          pickImage();
        }
      }
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView
        style={{ height: '100%', backgroundColor: theme.colors.white }}
      >
        <View
          style={{
            height: '100%',
            paddingTop: 20,
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <Text style={{ marginBottom: 10, fontSize: 25, fontWeight: 'bold' }}>
            画像
          </Text>
          {!image ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                onPressAction();
              }}
            >
              <View
                style={{
                  width: '100%',
                  height: 100,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderStyle: 'dashed',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#dcdcdc',
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    marginBottom: 10,
                  }}
                >
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                    }}
                    source={require('../images/upload_24.png')}
                  />
                </View>
                <Text style={{ width: '100%', textAlign: 'center' }}>
                  画像をアップロードする
                </Text>
              </View>
              <Image
                source={{
                  uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg',
                }}
              ></Image>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                width: '100%',
                height: 100,
                marginBottom: 20,
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  position: 'relative',
                }}
              >
                <Image
                  source={{ uri: image }}
                  style={{
                    alignItems: 'center',
                    width: 140,
                    height: '100%',
                  }}
                />
                <TouchableOpacity
                  onPress={() => onPressAction()}
                  activeOpacity={1}
                  style={{ position: 'absolute', bottom: 0, right: 0 }}
                >
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      position: 'absolute',
                      bottom: -10,
                      right: -15,
                    }}
                    source={require('../images/cameraIcon.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View>
            <Text
              style={{ marginBottom: 10, fontSize: 25, fontWeight: 'bold' }}
            >
              商品名
            </Text>
            <View
              style={{
                width: '100%',
                height: 50,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <TextInput
                placeholder='商品名を入力してください'
                style={{
                  fontSize: 20,
                  width: '100%',
                  height: '100%',
                  paddingRight: 8,
                  paddingLeft: 8,
                }}
              />
            </View>
          </View>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
