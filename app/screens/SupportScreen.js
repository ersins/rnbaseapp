import React from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import {navigate} from '../navigation/navigation';

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#006d6a'} barStyle={'light-content'} />
      <Text>Support Screen</Text>
      <Button title={'Support'} onPress={() => alert('Support Screen')} />
    </View>
  );
};
export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
