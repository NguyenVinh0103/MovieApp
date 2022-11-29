import {StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigation} from './src/navigation/RootNavigation';
import { Store } from './src/redux';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaProvider>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <RootNavigation />
    </SafeAreaProvider>
    </Provider>
  );
};

export default App;
