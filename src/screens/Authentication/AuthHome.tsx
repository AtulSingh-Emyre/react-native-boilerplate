import React, {memo} from 'react';
import Background from '../../components/Authentication/Background';
import Logo from '../../components/Authentication/Logo';
import Header from '../../components/Authentication/Header';
import Button from '../../components/Authentication/Button';
import Paragraph from '../../components/Authentication/Paragraph';
import {Text} from 'react-native';
import {ScreenNames} from '../../navigation/AuthNavigation';

type Props = {
  navigation: any;
};

const HomeScreen = ({navigation}: Props) => (
  <Background>
    <Logo />
    <Header>Login Template</Header>

    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <Button
      mode="contained"
      onPress={() => navigation.navigate(ScreenNames.LOGIN)}>
      <Text> Login </Text>
    </Button>
    <Button
      children="Sign Up"
      mode="outlined"
      onPress={() => navigation.navigate(ScreenNames.REGISTER)}
    />
  </Background>
);

export default memo(HomeScreen);
