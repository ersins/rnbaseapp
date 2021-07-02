import React from 'react';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {openDrawer} from '../navigation/navigation';
import DetailScreen from './DetailScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#006d6a',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Detail',
          tabBarColor: '#006d6a',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#006d6a',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#006d6a',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cog" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainTabScreen;

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#006d6a'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Owerview',
        headerLeft: () => (
          <Icon.Button
            name={'ios-menu'}
            size={25}
            backgroundColor={'#006d6a'}
            onPress={() => {
              openDrawer();
            }}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailStackScreen = () => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#006d6a'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <DetailStack.Screen
      name="Detail"
      component={DetailScreen}
      options={{
        title: 'Detail Page',
        headerLeft: () => (
          <Icon.Button
            name={'ios-menu'}
            size={25}
            backgroundColor={'#006d6a'}
            onPress={() => {
              openDrawer();
            }}
          />
        ),
      }}
    />
  </DetailStack.Navigator>
);
const ExploreStackScreen = () => (
  <ExploreStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#006d6a'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <ExploreStack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        title: 'Explore Page',
        headerLeft: () => (
          <Icon.Button
            name={'ios-menu'}
            size={25}
            backgroundColor={'#006d6a'}
            onPress={() => {
              openDrawer();
            }}
          />
        ),
      }}
    />
  </ExploreStack.Navigator>
);
const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#006d6a'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Profile Page',
        headerLeft: () => (
          <Icon.Button
            name={'ios-menu'}
            size={25}
            backgroundColor={'#006d6a'}
            onPress={() => {
              openDrawer();
            }}
          />
        ),
      }}
    />
  </ProfileStack.Navigator>
);
