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
import CommonMultiInputText from './CommonMultiInputText';
import { useDispatch, useSelector } from 'react-redux';
import {
  setClassifying,
  setImageData,
  setKeepMethodTextData,
} from '../redux/common/commonRegisterSlice';
import { RootState } from '../redux/store';
import AlertModal from './modalComponents/AlertModal';
import { useNavigation } from '@react-navigation/native';
import { RegisterScreenNavigationProp } from '../type';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const { imageData, classifying, keepMethodTextData } = useSelector(
    (state: RootState) => state.commonRegister
  );

  const { isAlertModal } = useSelector((state: RootState) => state.common);

  /** 画像が挿入されているかどうかのフラグ */
  const [image, setImage] = useState(imageData);

  /** モーダルの表示非表示のフラグ */
  const [isModal, setIsModal] = useState(false);

  /** 分類のテキスト */
  const [classification, setClassification] = useState(classifying);

  /** 保存方法のテキスト */
  const [keepMethod, setKeepMethod] = useState(keepMethodTextData);

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
      dispatch(setImageData(result.uri));
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
      dispatch(setImageData(result.uri));
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

  /** reduxに分類のテキストをdispatchする */
  dispatch(setClassifying(classification));
  /** reduxに保存方法のテキストをdispatchする */
  dispatch(setKeepMethodTextData(keepMethod));

  return (
    <KeyboardAvoidingView
      behavior='position'
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
      enabled={isKeyboardUp}
      keyboardVerticalOffset={30}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ScrollView style={{ backgroundColor: theme.colors.white }}>
          <View
            style={{
              paddingTop: 20,
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            <Text
              style={{
                marginBottom: 10,
                fontSize: 25,
                fontWeight: 'bold',
                fontFamily: theme.font.hiragino,
              }}
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
            <CommonMultiInputText
              label={'メモ'}
              placeholder={'タップしてメモを追加'}
              setIsKeyboardUp={setIsKeyboardUp}
            />
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
      <AlertModal isAlertModal={isAlertModal} navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
