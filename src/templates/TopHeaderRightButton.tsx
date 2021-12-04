import React, {memo} from 'react';
import {IconButton, useTheme} from 'react-native-paper';

interface Props {
  openNotifications: () => void;
}

const TopHeaderRightButton = ({openNotifications}: Props) => {
  const theme = useTheme();
  return (
    <IconButton
      icon="bell-circle"
      color={theme.colors.notification}
      size={36}
      onPress={openNotifications}
    />
  );
};

export default memo(TopHeaderRightButton);
