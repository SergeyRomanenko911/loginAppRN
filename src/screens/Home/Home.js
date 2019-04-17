import React from 'react';

import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { WellcomeBackground } from '../../components/WellcomeBackground';
import { BackgroundButton } from '../../components/Buttons/BackgroundButton';
import { logOutUser } from '../../action/Auth';

type Props = {
  out: Function,
  user: Object,
};

type State = {};

class Home extends React.Component<Props, State> {
  logOut = () => {
    const { out } = this.props;
    out();
  };

  renderHello = () => {
    const { user } = this.props;
    if (!user.displayName || user.displayName === null || user.displayName === '') {
      return (
        <Text
          style={{
            fontSize: 40,
            color: '#fff',
            paddingBottom: 15,
            textAlign: 'center',
          }}
        >
          Привіт
        </Text>
      );
    }
    return (
      <Text
        style={{
          fontSize: 40,
          color: '#fff',
          paddingBottom: 15,
          textAlign: 'center',
        }}
      >
        {`Привіт, ${user.displayName}`}
      </Text>
    );
  };

  renderData = () => {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        {this.renderHello()}
        <View
          style={{
            height: 100,
            backgroundColor: user.photoURL ? user.photoURL : 'transparent',
            borderRadius: 10,
          }}
        />
        <BackgroundButton text="Выход" onPress={this.logOut} bold />
      </View>
    );
  };

  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <WellcomeBackground>
        <View style={{ flex: 1 }}>
          <View style={{ height: 300 }} />
          {this.renderData()}
        </View>
      </WellcomeBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.Auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    out: () => dispatch(logOutUser()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
