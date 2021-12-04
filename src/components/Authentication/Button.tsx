import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {theme} from '../../utils/theme';

type Props = React.ComponentProps<typeof PaperButton>;

const Button = ({mode, style, children, ...props}: Props): any => {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && {backgroundColor: theme.colors.surface},
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}>
      {children}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    width: '100%',
  },
});

export default memo(Button);
