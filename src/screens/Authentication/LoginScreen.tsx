import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Background from '../../components/Authentication/Background';
import Logo from '../../components/Authentication/Logo';
import Header from '../../components/Authentication/Header';
import Button from '../../components/Authentication/Button';
import TextInput from '../../components/Authentication/TextInput';
import BackButton from '../../components/Authentication/BackButton';
import {theme} from '../../utils/theme';
// import {emailValidator, passwordValidator} from '../../utils/validators';
import {ScreenNames} from '../../navigation/AuthNavigation';
import {connect} from 'react-redux';
import {RootReducerState} from '../../redux/reducers';
import {AuthRepositry} from '../../services/AuthRepositry';
// import {Navigation} from '../types';

type Props = {
  navigation: any;
  loggedIn?: boolean;
  updateUser: any;
};

const LoginScreen = ({navigation, updateUser}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onLoginPressed = () => {
    // const emailError = emailValidator(email.value);
    // const passwordError = passwordValidator(password.value);

    // if (emailError || passwordError) {
    //   setEmail({...email, error: emailError});
    //   setPassword({...password, error: passwordError});
    //   return;
    // }
    updateUser({
      email,
      password,
      returnSecureToken: true,
    });
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate(ScreenNames.LOGINHOME)} />

      <Logo />

      <Header>Welcome back.</Header>

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

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.FORGOTPASSWORD)}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.REGISTER)}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

const mapStateToProps = (state: RootReducerState) => ({
  loggedIn: state.userReducer.loggedIn,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateUser: (user: any) => dispatch(AuthRepositry.updateUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(memo(LoginScreen));

// export default memo(LoginScreen);
