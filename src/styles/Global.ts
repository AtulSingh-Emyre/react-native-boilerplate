import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {PrimaryTheme} from './Themes';

export const Typography: any = {
  title: {
    fontSize: wp('8.5%'),
    color: PrimaryTheme.$TEXT_COLOR_900,
    fontWeight: 'bold',
    fontFamily: 'Muli',
  },
  heading: {
    fontSize: wp('7%'),
    color: PrimaryTheme.$TEXT_COLOR_900,
    fontWeight: 'bold',
    fontFamily: 'Muli',
  },
  subHeading: {
    fontSize: wp('5%'),
    color: PrimaryTheme.$TEXT_COLOR_700,
    fontWeight: '500',
    fontFamily: 'Muli',
  },
  paragraph: {
    fontSize: wp('4%'),
    color: PrimaryTheme.$TEXT_COLOR_500,
    fontFamily: 'Muli',
  },
  lightText: {
    fontSize: wp('3.7%'),
    color: PrimaryTheme.$TEXT_COLOR_300,
    fontFamily: 'Muli',
  },
  errorText: {
    fontSize: wp('3.7%'),
    color: PrimaryTheme.$ERROR_COLOR,
    fontFamily: 'Muli',
  },
};

export const Spacing = {
  tiny: {
    marginLeft: wp('0.25%'),
    marginRight: wp('0.25%'),
    marginTop: hp('0.25%'),
    marginBottom: hp('0.25%'),
  },
  small: {
    marginLeft: wp('0.5%'),
    marginRight: wp('0.5%'),
    marginTop: hp('0.5%'),
    marginBottom: hp('0.5%'),
  },
  regular: {
    marginLeft: wp('1%'),
    marginRight: wp('1%'),
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
  },
  large: {
    marginLeft: wp('1.5%'),
    marginRight: wp('1.5%'),
    marginTop: hp('1.5%'),
    marginBottom: hp('1.5%'),
  },
  extraLarge: {
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
  },
};

export const pComponentStyles = {
  textInput: {
    width: wp('70%'),
    borderWidth: 1,
    marginBottom: 10,
  },
};

export const lComponentStyles = {
  textInput: {
    ...pComponentStyles.textInput,
    width: wp('60%'),
  },
};
