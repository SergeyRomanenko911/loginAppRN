import React from 'react';

import {
  View, Text, Animated, Platform,
} from 'react-native';

import styles from './styles';

import { InputForm } from '../InputForm';
import { BackgroundButton } from '../Buttons/BackgroundButton';

type Props = {
  onSelect: Function,
  goRegister: Function,
  signIn: Function,
  data: Object,
  error: Object,
};
class LoginForm extends React.PureComponent<Props> {
  state = {
    showButton: new Animated.Value(-120),
  };

  componentDidMount() {
    const { showButton } = this.state;
    Animated.timing(showButton, {
      toValue: 0,
      duration: 700,
    }).start();
  }

  onFocus = () => {
    if (Platform.OS === 'ios') {
      const { showButton } = this.state;
      Animated.timing(showButton, {
        toValue: 200,
        duration: 300,
      }).start();
    }
  };

  onBlur = () => {
    if (Platform.OS === 'ios') {
      const { showButton } = this.state;
      Animated.timing(showButton, {
        toValue: 0,
        duration: 300,
      }).start();
    }
  };

  renderErrors = () => {
    const { error } = this.props;
    if (!error) {
      return null;
    }
    return Object.keys(error).map(key => (
      <Text key={key} style={styles.errorText}>
        {error[key][0]}
      </Text>
    ));
  };

  render() {
    const {
      onSelect, data, signIn, goRegister,
    } = this.props;
    const { showButton } = this.state;

    return (
      <Animated.View style={[styles.container, { bottom: showButton }]}>
        <View style={styles.content}>
          <InputForm
            id="email"
            onChange={onSelect}
            value={data.email}
            placeholder="email"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
          <InputForm
            id="password"
            secure
            onChange={onSelect}
            value={data.password}
            placeholder="пароль"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
          {this.renderErrors()}
          <View style={styles.forgotContainer} />
          <BackgroundButton
            text="Вхід"
            bold
            onPress={signIn}
            textColor="rgb(221,54,78)"
            backgroundColor="#fff"
          />
          <View style={{ height: 15 }} />
          <BackgroundButton
            text="Створити аккаунт"
            bold
            onPress={goRegister}
            textColor="#fff"
            backgroundColor="rgb(221,54,78)"
          />
        </View>
      </Animated.View>
    );
  }
}

export default LoginForm;
