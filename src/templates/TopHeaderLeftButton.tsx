import React, {memo} from 'react';
import {IconButton, useTheme} from 'react-native-paper';

interface Props {
  openDrawer: () => void;
}

const TopHeaderLeftButton = ({openDrawer}: Props) => {
  const theme = useTheme();
  return (
    <IconButton
      icon="menu"
      color={theme.colors.primary}
      size={36}
      onPress={openDrawer}
    />
  );
};

export default memo(TopHeaderLeftButton);
