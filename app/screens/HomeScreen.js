import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {navigate} from '../navigation/navigation';
import {useGetUsersMutation} from '../commons/services/RootApi';

const HomeScreen = () => {
  const [getUsers, {isLoading}] = useGetUsersMutation();
  const [users, setUsers] = useState([]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#006d6a'} barStyle={'light-content'} />
      <Text>Home Screen</Text>
      <Button title={'Detail'} onPress={() => navigate('Detail', null)} />
      <Button
        title={'Get Users'}
        onPress={async () => {
          const users = await getUsers();
          setUsers(users.data);
        }}
      />
      {users.length > 0 ? (
        <FlatList
          data={users}
          renderItem={({item}) => <Text>{item.username}</Text>}
        />
      ) : null}
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
