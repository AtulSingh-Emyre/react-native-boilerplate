import * as React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import Store from './src/redux/reducers';
// import {StyleSheet} from 'react-native';
import AppRouter from './src/navigation/Routes';
export default function App() {
  return (
    <PaperProvider>
      <ReduxProvider store={Store}>
        <AppRouter />
      </ReduxProvider>
    </PaperProvider>
  );
}
