import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

// Wellcome
import Wellcome from '../screens/Wellcome/Wellcome';

// Auth
import AuthLoadingScreen from '../screens/Common/AuthLoading';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';

// Home
import Home from '../screens/Home/Home';

const WellcomeScreen = createStackNavigator(
  {
    Wellcome: {
      screen: Wellcome,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Wellcome',
  },
);

export const HomeNavigation = createStackNavigator(
  {
    HomeWellcome: {
      screen: Home,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeWellcome',
  },
);

const Auth = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

const Navigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Start: WellcomeScreen,
    Auth,
    Home: HomeNavigation,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default Navigator;
