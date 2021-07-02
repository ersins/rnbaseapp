import React from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import {navigate} from '../navigation/navigation';

const BookmarkScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#006d6a'} barStyle={'light-content'} />
      <Text>Bookmark Screen</Text>
      <Button title={'Bookmark'} onPress={() => alert('Bookmark Screen')} />
    </View>
  );
};
export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
