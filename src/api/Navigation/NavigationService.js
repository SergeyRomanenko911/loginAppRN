import { NavigationActions } from 'react-navigation';

const navigator = {
  navigation: null,
  setTopLevelNavigator: (navigatorRef) => {
    navigator.navigation = navigatorRef;
    // console.log(navigator, navigatorRef);
  },
  navigate: (routeName, params) => {
    // console.log(routeName, params);
    navigator.navigation.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  },
};

export default navigator;
