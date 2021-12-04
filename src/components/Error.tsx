import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from './Icon';
export interface Props {
  onPress: any;
}

const Error = (props: Props) => {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={props.onPress}>
      <Icon color={'black'} name={'refresh'} size={40} />
    </TouchableOpacity>
  );
};
Error.defaultProps = {};
export default Error;
