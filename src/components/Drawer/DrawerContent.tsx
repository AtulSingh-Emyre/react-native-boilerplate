import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Drawer, Title} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

// import {useCustomTheme} from '../../context/theme-context';
import {ScreenNames} from '../../utils/Navigations/RootNavigation';
import {connect} from 'react-redux';
import {RootReducerState as RootState} from '../../redux/reducers';
import {AuthRepositry} from '../../services/AuthRepositry';
import {CommonActions} from '@react-navigation/native';
interface IDrawerContentProps {
  id: string;
}

interface IDrawerContentDispatchProps {
  logout: Function;
}

interface IProps extends IDrawerContentDispatchProps, IDrawerContentProps {
  navigation: any;
}

const mapStateToProps = ({userReducer}: RootState): IDrawerContentProps => {
  return {
    id: userReducer.user.idToken,
  };
};

const mapDispatchToProps = (dispatch: any): IDrawerContentDispatchProps => {
  return {
    logout: async () => await dispatch(AuthRepositry.logout()),
  };
};

const DrawerContent: FC<IProps> = props => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <DrawerContentScrollView {...props}>
          <View style={styles.userInfoSection}>
            <View style={styles.topHeader}>
              <Avatar.Image
                accessibilityComponentType={null}
                accessibilityStates={null}
                accessibilityTraits={null}
                source={require('../../assets/No-User-Avatar.jpeg')}
                size={65}
              />
              <View style={styles.nameHeader}>
                <Title
                  style={styles.title}
                  allowFontScaling={true}
                  numberOfLines={1}>
                  {props.id}
                </Title>
              </View>
            </View>
          </View>

          <Drawer.Section
            accessibilityComponentType={null}
            accessibilityStates={null}
            accessibilityTraits={null}
            style={[styles.drawerSection]}>
            <DrawerItem
              label="jobs"
              onPress={() => {
                props.navigation.dispatch(
                  CommonActions.navigate(ScreenNames.JOBSHOME),
                );
              }}
            />
          </Drawer.Section>
        </DrawerContentScrollView>
        <Drawer.Section
          accessibilityComponentType={null}
          accessibilityStates={null}
          accessibilityTraits={null}
          style={[styles.bottomDrawerSection]}>
          <DrawerItem
            label="Sign Out"
            onPress={() => {
              props.navigation.dispatch(
                CommonActions.navigate(ScreenNames.JOBSHOME),
              );
              props.logout();
            }}
          />
        </Drawer.Section>
      </View>
    </React.Fragment>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    textTransform: 'capitalize',
  },
  sectionSubHeader: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  section: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 30,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    borderTopWidth: 1,
    marginTop: 15,
  },
  bottomDrawerSection: {
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  topHeader: {
    flexDirection: 'row',
    marginTop: 15,
    //justifyContent: 'space-between',
  },
  nameHeader: {
    flexDirection: 'column',
    left: 6,
  },
  arrowNavbtn: {
    marginTop: 20,
    position: 'absolute',
    right: 0,
  },
});
