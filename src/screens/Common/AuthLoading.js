// @flow

import React from 'react';

import { connect } from 'react-redux';
import { ActivityIndicator, AsyncStorage, View } from 'react-native';

import { userAutoLogin } from '../../action/Auth';

type Props = {
  navigation: Object,
  userLoginFromAsync: Function,
};
class AuthLoading extends React.Component<Props> {
  constructor(props: { navigation: Object }) {
    super(props);
    this.checkUserState();
  }

  checkUserState = async () => {
    const { navigation } = this.props;
    const userToken = await AsyncStorage.getItem('user');

    if (userToken) {
      const { userLoginFromAsync } = this.props;
      userLoginFromAsync();
      navigation.navigate('Home');
    } else {
      navigation.navigate('Start');
    }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(15, 39, 76)' }}>
        <ActivityIndicator />
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    userLoginFromAsync: () => dispatch(userAutoLogin()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthLoading);
