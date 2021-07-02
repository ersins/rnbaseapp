import React from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import {navigate} from '../navigation/navigation';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#006d6a'} barStyle={'light-content'} />
      <Text>Settings Screen</Text>
      <Button title={'Settings'} onPress={() => alert('Settings Screen')} />
    </View>
  );
};
export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
