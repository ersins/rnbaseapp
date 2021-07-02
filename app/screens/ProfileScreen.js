import React from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import {navigate} from '../navigation/navigation';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#006d6a'} barStyle={'light-content'} />
      <Text>Profile Screen</Text>
      <Button title={'Detail'} onPress={() => alert('Profile Screen')} />
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
