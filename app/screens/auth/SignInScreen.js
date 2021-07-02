import React, {useState} from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {navigate} from '../../navigation/navigation';
import {useDispatch} from 'react-redux';
import {setCredentials, singIn} from './authSlice';
import {useLoginMutation} from '../../commons/services/RootApi';

const FORM_DATA_INITIAL = {
  email: '',
  password: '',
  check_textInputChange: false,
  secureTextEntry: true,
};

const SingInScreen = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(FORM_DATA_INITIAL);
  const handleTextInputChange = val => {
    if (val.length !== 0) {
      setFormData({
        ...formData,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setFormData({
        ...formData,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setFormData({
      ...formData,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setFormData({
      ...formData,
      secureTextEntry: !formData.secureTextEntry,
    });
  };
  const user = {
    username: 'mor_2314',
    password: '83r5^_',
  };
  const [login, {isLoading}] = useLoginMutation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#006d6a'} barStyle={'light-content'} />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation={'fadeInUpBig'}
        duration={1500}
        style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name={'user-o'} color={'#05375a'} size={20} />
          <TextInput
            placeholder={'Your Email'}
            style={styles.textInput}
            autoCapitalize={'none'}
            onChangeText={val => handleTextInputChange(val)}
          />
          {formData.check_textInputChange ? (
            <Animatable.View animation={'bounceIn'}>
              <Feather name={'check-circle'} color={'green'} size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
        <View style={styles.action}>
          <Feather name={'lock'} color={'#05375a'} size={20} />
          <TextInput
            secureTextEntry={formData.secureTextEntry ? true : false}
            placeholder={'Your Password'}
            style={styles.textInput}
            autoCapitalize={'none'}
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {formData.secureTextEntry ? (
              <Feather name={'eye-off'} color={'grey'} size={20} />
            ) : (
              <Feather name={'eye'} color={'green'} size={20} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={{color: '#006d6a', marginTop: 15}}>Forgot password</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={async () => {
              try {
                const myuser = await login(user).unwrap();
                dispatch(setCredentials(myuser));
              } catch (err) {
                console.log(err);
              }
              // dispatch(singIn());
            }}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#fff'}]}>Sing In</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.signIn,
              {borderColor: '#006d6a', borderWidth: 1, marginTop: 15},
            ]}
            onPress={() => {
              navigate('SignUp', null);
            }}>
            <Text style={[styles.textSign, {color: '#006d6a'}]}>Sing Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default SingInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006d6a',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
