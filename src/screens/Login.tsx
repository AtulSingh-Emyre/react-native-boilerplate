import 'react-native-gesture-handler';
import * as React from 'react';
import {ActivityIndicator, StyleSheet, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import {
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';

import If from '../components/If';
import {lComponentStyles, pComponentStyles, Typography} from '../styles/Global';
import CustomText from '../components/CustomText';
import Container from '../components/Container';
import {Validators} from '../utils/validators';
import {Utils} from '../utils/utils';
import CustomButton from '../components/CustomButton';
import {connect} from 'react-redux';
import {AuthRepositry} from '../services/AuthRepositry';
import {RootReducerState} from '../redux/reducers';

interface State {
  form: {
    emailTextInput: string;
    passwordTextInput: string;
  };
  orientation: string;
}

interface Props {
  login: any;
  loggingIn: boolean;
}
class Login extends React.Component<Props, State> {
  private passwordInputRef;
  constructor(props) {
    super(props);
    this.state = {
      form: {
        emailTextInput: '',
        passwordTextInput: '',
      },
      orientation: 'portrait',
    };
  }

  componentDidMount(): void {
    listenOrientationChange(this);
  }
  componentWillUnmount(): void {
    removeOrientationListener();
  }

  onLogin = values => {
    this.props.login({
      email: values.emailTextInput,
      password: values.passwordTextInput,
      returnSecureToken: true,
    });
  };
  render() {
    return (
      <Container containerStyles={{alignItems: 'center'}}>
        <CustomText
          style={[
            Typography.title,
            {letterSpacing: 5, marginBottom: hp('2%')},
          ]}>
          Login
        </CustomText>
        <Formik
          initialValues={this.state.form}
          validateOnMount={true}
          validateOnChange={true}
          onSubmit={values => this.onLogin(values)}
          validationSchema={Validators.loginValidator}>
          {props => {
            return (
              <View style={{alignItems: 'center'}}>
                <TextInput
                  onSubmitEditing={() => this.passwordInputRef.focus()}
                  returnKeyType={'next'}
                  onBlur={() => props.setFieldTouched('emailTextInput')}
                  onChangeText={props.handleChange('emailTextInput')}
                  style={Utils.dynamicStyles(
                    pComponentStyles.textInput,
                    lComponentStyles.textInput,
                    this.state.orientation,
                  )}
                  placeholder={'Email'}
                  value={props.values.emailTextInput}
                />
                <If show={props.dirty && props.touched.emailTextInput}>
                  <CustomText style={[Typography.errorText]}>
                    {props.errors.emailTextInput}
                  </CustomText>
                </If>
                <TextInput
                  onSubmitEditing={() => {
                    if (props.isValid) {
                      console.log('is valid');
                    } else {
                      console.log('form is not valid');
                    }
                  }}
                  onBlur={() => props.setFieldTouched('passwordTextInput')}
                  ref={ref => (this.passwordInputRef = ref)}
                  returnKeyType={'done'}
                  onChangeText={props.handleChange('passwordTextInput')}
                  style={Utils.dynamicStyles(
                    pComponentStyles.textInput,
                    lComponentStyles.textInput,
                    this.state.orientation,
                  )}
                  placeholder={'Password'}
                  value={props.values.passwordTextInput}
                />
                <If show={props.dirty && props.touched.passwordTextInput}>
                  <CustomText style={[Typography.errorText]}>
                    {props.errors.passwordTextInput}
                  </CustomText>
                </If>
                <CustomButton
                  useIcon={true}
                  iconName={'key'}
                  disabled={!props.isValid}
                  title={'Login'}
                  onPress={() => {
                    if (props.isValid) {
                      return props.handleSubmit();
                    } else {
                      console.log('form is not valid');
                    }
                  }}
                />
                <If show={this.props.loggingIn}>
                  <ActivityIndicator size={'large'} />
                </If>
              </View>
            );
          }}
        </Formik>
      </Container>
    );
  }
}

const portraitStyles = () => {
  return StyleSheet.create({});
};

const landScapeStyles = () => {
  return StyleSheet.create({});
};

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(AuthRepositry.login(data)),
});
const mapStateToProps = (state: RootReducerState) => ({
  loggingIn: state.userReducer.loggingIn,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
