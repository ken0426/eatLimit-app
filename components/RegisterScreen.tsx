import React, { useEffect, useState } from 'react';
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
import { Camera } from 'expo-camera';
import SelectorModal from './modalComponents/SelectorModal';
import { classificationData, keepMethodData, selectData } from '../constants';

const RegisterScreen = () => {
  /** 画像が挿入されているかどうかのフラグ */
  const [image, setImage] = useState(null);

  /** モーダルの表示非表示のフラグ */
  const [isModal, setIsModal] = useState(false);

  /** 分類のテキスト */
  const [classification, setClassification] = useState('選択してください');

  /** 保存方法のテキスト */
  const [keepMethod, setKeepMethod] = useState('選択してください');

  /** 選択されたのテキストデータ */
  const [radioTextData, setRadioTextData] = useState('');

  /** どの項目をタップしたか判定するフラグ */
  const [onPressSelect, setOnPressSelect] = useState('');

  /** ラジオボタンのデータ */
  const [radioData, setRadioData] = useState([]);

  /** アプリがカメラへのアクセス権限を求めるためのフラグ */
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  /** カメラの起動 */
  const takePhoto = async () => {
    let result: { uri?: string; cancelled: boolean } =
      await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  /** 写真フォルダから画像を選択するロジック */
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

  /** 画像をアップロードするときに出るモーダル */
  const onPressAction = ({ isImage }) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: isImage
          ? ['キャンセル', '写真を撮影', '写真を選択', '削除']
          : ['キャンセル', '写真を撮影', '写真を選択'],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 3,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // キャンセルのアクション
        } else if (buttonIndex === 1) {
          // カメラを起動
          takePhoto();
        } else if (buttonIndex === 2) {
          // ライブラリから写真を選択
          pickImage();
        } else if (buttonIndex === 3) {
          setImage(null);
        }
      }
    );
  };

  return (
    <>
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
            <Text
              style={{ marginBottom: 10, fontSize: 25, fontWeight: 'bold' }}
            >
              画像
            </Text>
            {!image ? (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  onPressAction({ isImage: false });
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
                    onPress={() => onPressAction({ isImage: true })}
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
            <View style={{ marginBottom: 20 }}>
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
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{ marginBottom: 10, fontSize: 25, fontWeight: 'bold' }}
              >
                分類
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setRadioData(classificationData);
                  setIsModal(!isModal);
                  setRadioTextData(classification);
                  setOnPressSelect(selectData.classification);
                }}
                style={{
                  width: '100%',
                  height: 50,
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingRight: 8,
                  paddingLeft: 8,
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 20 }}>{classification}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{ marginBottom: 10, fontSize: 25, fontWeight: 'bold' }}
              >
                保存方法
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setRadioData(keepMethodData);
                  setIsModal(!isModal);
                  setRadioTextData(keepMethod);
                  setOnPressSelect(selectData.keepMethod);
                }}
                style={{
                  width: '100%',
                  height: 50,
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingRight: 8,
                  paddingLeft: 8,
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 20 }}>{keepMethod}</Text>
              </TouchableOpacity>
            </View>
            <View></View>
            <View></View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      <SelectorModal
        isModal={isModal}
        setIsModal={setIsModal}
        radioData={radioData}
        setClassification={setClassification}
        setKeepMethod={setKeepMethod}
        radioTextData={radioTextData}
        onPressSelect={onPressSelect}
      />
    </>
  );
};

export default RegisterScreen;
