import React, {memo, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {emailValidator} from '../../utils/validators';
import Background from '../../components/Authentication/Background';
import BackButton from '../../components/Authentication/BackButton';
import Logo from '../../components/Authentication/Logo';
import Header from '../../components/Authentication/Header';
import TextInput from '../../components/Authentication/TextInput';
import {theme} from '../../utils/theme';
import Button from '../../components/Authentication/Button';
import {ScreenNames} from '../../navigation/AuthNavigation';

type Props = {
  navigation: any;
};

const ForgotPasswordScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }

    navigation.navigate(ScreenNames.LOGIN);
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate(ScreenNames.LOGIN)} />

      <Logo />

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate(ScreenNames.LOGIN)}>
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
});

export default memo(ForgotPasswordScreen);
