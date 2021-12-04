import * as React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import DiaryItem from './DiaryItem';
import {DiaryItem as diaryItem} from '../models/DiaryItem';
import {Spacing} from '../styles/Global';

export interface Props {
  diaryItems: diaryItem[];
  onPress: any;
  onRefresh: any;
  refreshing: boolean;
}

const DiaryList = (props: Props) => {
  return (
    <FlatList
      style={{marginTop: Spacing.extraLarge.marginTop}}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      data={props.diaryItems}
      extraData={props}
      refreshControl={
        <RefreshControl
          onRefresh={props.onRefresh}
          refreshing={props.refreshing}
        />
      }
      renderItem={data => {
        return (
          <DiaryItem
            onPress={() => props.onPress(data.item)}
            diaryItem={data.item}
          />
        );
      }}
    />
  );
};
DiaryList.defaultProps = {};
export default DiaryList;

// <>
//       {props.diaryItems.map((diaryItem, index) => {
//         return <DiaryItem diaryItem={diaryItem} index={index} />;
//       })}
//     </>
