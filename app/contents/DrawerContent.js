import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Avatar,
  Caption,
  Paragraph,
  Switch,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import DrawerSection from 'react-native-paper/src/components/Drawer/DrawerSection';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {navigate} from '../navigation/navigation';
import {useDispatch} from 'react-redux';
import {singOut} from '../screens/auth/authSlice';

export const DrawerContent = props => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://www.gravatar.com/avatar/',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Text style={styles.title}>Ersin Şenzek</Text>
                <Caption style={styles.caption}>Amele</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Flowing</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Follower</Caption>
              </View>
            </View>
          </View>
          <DrawerSection style={styles.drawerSection}>
            <DrawerItem
              icon={(color, size) => (
                <Icon name={'home-outline'} color={color} size={size} />
              )}
              label={'Home'}
              onPress={() => {
                navigate('Home', null);
              }}
            />
            <DrawerItem
              icon={(color, size) => (
                <Icon name={'account-outline'} color={color} size={size} />
              )}
              label={'Profile'}
              onPress={() => {
                navigate('Profile', null);
              }}
            />
            <DrawerItem
              icon={(color, size) => (
                <Icon name={'bookmark-outline'} color={color} size={size} />
              )}
              label={'Bookmarks'}
              onPress={() => {
                navigate('Bookmark', null);
              }}
            />
            <DrawerItem
              icon={(color, size) => (
                <Icon name={'cog-outline'} color={color} size={size} />
              )}
              label={'Settings'}
              onPress={() => {
                navigate('Settings', null);
              }}
            />
            <DrawerItem
              icon={(color, size) => (
                <Icon
                  name={'account-check-outline'}
                  color={color}
                  size={size}
                />
              )}
              label={'Support'}
              onPress={() => {
                navigate('Support', null);
              }}
            />
          </DrawerSection>
          <DrawerSection title={'Preferences'}>
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents={'none'}>
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </DrawerSection>
        </View>
      </DrawerContentScrollView>
      <DrawerSection style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={(color, size) => (
            <Icon name={'exit-to-app'} color={color} size={size} />
          )}
          label={'Sing Out'}
          onPress={() => {
            dispatch(singOut());
          }}
        />
      </DrawerSection>
    </View>
  );
};
// export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
