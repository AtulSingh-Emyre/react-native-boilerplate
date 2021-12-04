import * as React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {Typography} from '../styles/Global';

export interface Props {
  children: any;
  style?: TextStyle | TextStyle[];
  numberOfLines?: number;
}

const CustomText = (props: Props) => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      allowFontScaling={false}
      style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    ...Typography.paragraph,
  },
});
CustomText.defaultProps = {
  numberOfLines: 3,
};
export default CustomText;
