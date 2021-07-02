import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './app/navigation/navigation';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import MainApp from './app/MainApp';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainApp />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
