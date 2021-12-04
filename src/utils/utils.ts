import {ImageStyle, Platform, TextStyle, ViewStyle} from 'react-native';

export class Utils {
  static dynamicStyles(
    portraitStyles:
      | ViewStyle
      | ViewStyle[]
      | TextStyle
      | TextStyle[]
      | ImageStyle
      | ImageStyle[],
    landscapeStylesheet:
      | ViewStyle
      | ViewStyle[]
      | TextStyle
      | TextStyle[]
      | ImageStyle
      | ImageStyle[],
    orientation: string,
  ) {
    return orientation === 'portrait' ? portraitStyles : landscapeStylesheet;
  }

  static isIos() {
    return Platform.OS === 'ios';
  }
  static images = {
    DIARY_THUMBNAIL: require('../assets/thumbnail.jpg'),
    ADD_IMAGE: require('../assets/add-image.png'),
  };
}
