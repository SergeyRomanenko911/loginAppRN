import NavigationManager from '../api/Navigation/NavigationService';

export function* navigateOnHome() {
  yield NavigationManager.navigate('Home');
}

export function* navigateOnLogout() {
  yield NavigationManager.navigate('Login');
}

export function* navigateOnLogin() {
  yield NavigationManager.navigate('Login');
}
