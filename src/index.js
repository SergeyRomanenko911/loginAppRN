import React from 'react';
import firebase from 'firebase';

import { Provider } from 'react-redux';

import Navigator from './config/Routes';
import Store from './config/Store';
import Theme from './config/Theme';
import Settings from './config/Settings';
import NavigatorService from './api/Navigation/NavigationService';

Theme();
firebase.initializeApp(Settings.firebaseConfig);
const App = () => (
  <Provider store={Store}>
    <Navigator
      ref={(navigatorRef) => {
        NavigatorService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);

export default App;
