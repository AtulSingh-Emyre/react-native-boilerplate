import React, {memo, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Background from '../../components/Authentication/Background';
import Logo from '../../components/Authentication/Logo';
import Header from '../../components/Authentication/Header';
import Button from '../../components/Authentication/Button';
import TextInput from '../../components/Authentication/TextInput';
import BackButton from '../../components/Authentication/BackButton';
import {theme} from '../../utils/theme';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../../utils/validators';
import {ScreenNames} from '../../navigation/AuthNavigation';

type Props = {
  navigation: any;
};

interface name {
  FirstNameValue?: string;
  FirstNameError?: string;
  LastNameValue?: string;
  LastNameError?: string;
}

const RegisterScreen = ({navigation}: Props) => {
  const [name, setName] = useState<name>({
    FirstNameValue: '',
    FirstNameError: '',
    LastNameValue: '',
    LastNameError: '',
  });
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onSignUpPressed = () => {
    const firstNameError = nameValidator(
      name.FirstNameValue ? name.FirstNameValue : '',
    );
    const lastNameError = nameValidator(
      name.LastNameValue ? name.LastNameValue : '',
    );
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || firstNameError || lastNameError) {
      setName({
        ...name,
        FirstNameError: firstNameError,
        LastNameError: lastNameError,
      });
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate(ScreenNames.LOGINHOME)} />
      <Logo />
      <Header>Create Account</Header>
      <View style={styles.nameViewContainer}>
        <TextInput
          containerStyles={styles.nameTextInputContainer}
          label="First Name"
          returnKeyType="next"
          value={name.FirstNameValue}
          onChangeText={text =>
            setName({FirstNameValue: text, FirstNameError: ''})
          }
          error={!!name.FirstNameError}
          errorText={name.FirstNameError}
        />
        <TextInput
          containerStyles={styles.nameTextInputContainer}
          label="Last Name"
          returnKeyType="next"
          value={name.LastNameValue}
          onChangeText={text =>
            setName({LastNameValue: text, LastNameError: ''})
          }
          error={!!name.LastNameError}
          errorText={name.LastNameError}
        />
      </View>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.LOGIN)}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  nameViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nameTextInputContainer: {
    width: '50%',
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);
