import React, {memo} from 'react';
import {ImageBackground, StyleSheet, KeyboardAvoidingView} from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Background = ({children}: Props) => (
  <ImageBackground
    source={require('../../assets/background_dot.png')}
    resizeMode="repeat"
    style={styles.background}>
    {/* <ScrollView> */}
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
    {/* </ScrollView> */}
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    // marginTop: '10%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
