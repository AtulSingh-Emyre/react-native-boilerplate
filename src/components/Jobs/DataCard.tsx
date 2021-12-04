import React, {memo} from 'react';
import {ListRenderItemInfo, StyleSheet, Text} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import {theme} from '../../utils/theme';

interface Props extends ListRenderItemInfo<any> {
  title: string;
  logo: any;
  location: string;
  position: string;
  starred: boolean;
  saved: boolean;
  applied: boolean;
}

const DataCard = (props: Props) => {
  return (
    <Card style={styles.container}>
      {/* <Avatar.Image source={'https://reactnative.dev/img/tiny_logo.png'} /> */}
      <Card.Title title={props.title} />
      <Card.Content>
        <Text>{props.location}</Text>
      </Card.Content>
      <Card.Content>
        <Text>{props.position}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 2,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 2,
    paddingTop: 2,
  },
});

export default memo(DataCard);
