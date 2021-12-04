import * as React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {PrimaryTheme} from '../styles/Themes';
import CustomText from './CustomText';
import If from './If';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from './Icon';

export interface Props {
  title: string;
  disabled?: boolean;
  buttonStyle?: ViewStyle | ViewStyle[];
  textStyle?: any;
  onPress: any;
  useIcon?: boolean;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
}

const CustomButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        props.disabled
          ? {
              ...styles.buttonStyle,
              backgroundColor: PrimaryTheme.$DIVIDER_COLOR,
            }
          : styles.buttonStyle,
        props.buttonStyle,
      ]}
      disabled={props.disabled}>
      <If show={props.useIcon}>
        <Icon
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
      </If>
      <CustomText style={[styles.textStyle, props.textStyle]}>
        {props.title}
      </CustomText>
    </TouchableOpacity>
  );
};
CustomButton.defaultProps = {
  disabled: false,
  useIcon: false,
  iconSize: 35,
  iconColor: 'white',
};
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: PrimaryTheme.$PRIMARY_COLOR,
    borderRadius: 5,
    width: wp('30%'),
    height: hp('5%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
});
export default CustomButton;
