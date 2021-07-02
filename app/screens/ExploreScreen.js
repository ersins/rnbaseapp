import React from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import {navigate} from '../navigation/navigation';

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#006d6a'} barStyle={'light-content'} />
      <Text>Explore Screen</Text>
      <Button title={'Detail'} onPress={() => alert('Explore Screen')} />
    </View>
  );
};
export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
