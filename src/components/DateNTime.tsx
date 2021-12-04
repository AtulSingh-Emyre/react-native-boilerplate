import * as React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Spacing} from '../styles/Global';
import CustomText from './CustomText';
import moment from 'moment';
import {PrimaryTheme} from '../styles/Themes';

export interface Props {
  timeStamp: Date;
  containerStyle?: ViewStyle | ViewStyle[];
}

const DateNTime = (props: Props) => {
  return (
    <View
      style={[
        {marginBottom: Spacing.large.marginBottom},
        props.containerStyle,
      ]}>
      <CustomText style={styles.dateNTimeText}>
        {moment(props.timeStamp).format('MMMM DD , YYYY - ddd')}
      </CustomText>
      <CustomText style={styles.dateNTimeText}>
        {moment(props.timeStamp).format('h:mm  a')}
      </CustomText>
    </View>
  );
};
const styles = StyleSheet.create({
  dateNTimeText: {color: PrimaryTheme.$DARK_PRIMARY_COLOR, fontWeight: 'bold'},
});
DateNTime.defaultProps = {};
export default DateNTime;
