import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Utils} from '../../utils/utils';
import ImageList from '../ImageList';

export interface Props {
  isVisible: boolean;
  onDismiss: any;
  images: any[];
  onImageSelect: any;
  onImageDelete: any;
}

const ImageGallery = (props: Props) => {
  console.log(props.images);
  return (
    <ReactNativeModal
      isVisible={props.isVisible}
      onBackButtonPress={props.onDismiss}
      onBackdropPress={props.onDismiss}
      onDismiss={props.onDismiss}>
      <View style={styles.container}>
        <TouchableOpacity onPress={props.onImageSelect}>
          <Image style={styles.image} source={Utils.images.ADD_IMAGE} />
        </TouchableOpacity>
        <ImageList onImageDelete={props.onImageDelete} images={props.images} />
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp('40%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {height: hp('20%'), width: wp('80%')},
});
ImageGallery.defaultProps = {};
export default ImageGallery;
