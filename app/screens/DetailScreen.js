import React from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import {goBack, navigate, popToTop, push} from '../navigation/navigation';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#006d6a'} barStyle={'light-content'} />
      <Text>Detail Screen</Text>
      <Button
        title={'Go to Detail again...'}
        onPress={() => push('Detail', null)}
      />
      <Button title={'Go to Home'} onPress={() => navigate('Home', null)} />
      <Button title={'Go to First'} onPress={() => popToTop()} />
      <Button title={'Go Back'} onPress={() => goBack()} />
    </View>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
