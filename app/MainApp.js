import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {navigationRef, openDrawer} from './navigation/navigation';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './contents/DrawerContent';
import BookmarkScreen from './screens/BookmarkScreen';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';
import RootStackScreen from './screens/RootStackScreen';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, View} from 'react-native';
import {opened} from './screens/auth/authSlice';

const Drawer = createDrawerNavigator();

const MainApp = props => {
  const {isLoading, userToken} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(opened());
    }, 1500);
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator
          size={'large'}
          animating={isLoading}
          color="#009387"
        />
      </View>
    );
  }

  return userToken != null ? (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} />
    </Drawer.Navigator>
  ) : (
    <RootStackScreen />
  );
};

export default MainApp;
