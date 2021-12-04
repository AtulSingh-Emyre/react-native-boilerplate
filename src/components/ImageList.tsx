import * as React from 'react';
import {FlatList} from 'react-native';
import ImageItem from './ImageItem';

export interface Props {
  images: any[];
  onImageDelete: any;
}

const ImageList = (props: Props) => {
  const renderItem = data => {
    return (
      <ImageItem
        onImageDelete={() => props.onImageDelete(data.item)}
        image={data.item}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(data, index) => index.toString()}
      numColumns={2}
      data={props.images}
      renderItem={renderItem}
    />
  );
};
ImageList.defaultProps = {};
export default ImageList;
