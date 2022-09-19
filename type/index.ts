import { StackNavigationProp } from '@react-navigation/stack';

export type StackPramList = {
  homeScreen: undefined;
  detailScreen: undefined;
  registerScreen: undefined;
  updateRegisterScreen: undefined;
};

export type RegisterScreenNavigationProp = StackNavigationProp<
  StackPramList,
  'registerScreen'
>;
