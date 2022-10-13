import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  ScrollView,
  ActionSheetIOS,
  KeyboardAvoidingView,
} from 'react-native';
import { theme } from '../styles';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import SelectorModal from './modalComponents/SelectorModal';
import { classificationData, keepMethodData, selectData } from '../constants';
import CommonSingleSelect from './CommonSingleSelect';
import CommonInputText from './CommonInputText';
import CommonInputDate from './CommonInputDate';

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

  /** キーボードによって要素が隠れる場合要素を上げるかどうかのフラグ */
  const [isKeyboardUp, setIsKeyboardUp] = useState(true);

  /** 初めてこの画面を開いた際にカメラへのアクセス権限を聞くロジック */
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
    return <Text>カメラにアクセスできません</Text>;
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
    <KeyboardAvoidingView behavior='position' enabled={isKeyboardUp}>
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
            <CommonInputText
              label={'商品名'}
              placeholder={'商品名を入力してください'}
              setIsKeyboardUp={setIsKeyboardUp}
            />
            <CommonSingleSelect
              label={'分類'}
              onPress={() => {
                setRadioData(classificationData);
                setIsModal(!isModal);
                setRadioTextData(classification);
                setOnPressSelect(selectData.classification);
              }}
              selectText={classification}
            />
            <CommonInputDate setIsKeyboardUp={setIsKeyboardUp} />
            <CommonSingleSelect
              label={'保存方法'}
              onPress={() => {
                setRadioData(keepMethodData);
                setIsModal(!isModal);
                setRadioTextData(keepMethod);
                setOnPressSelect(selectData.keepMethod);
              }}
              selectText={keepMethod}
            />
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
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
