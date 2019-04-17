import React from 'react';

import { Animated } from 'react-native';

import styles from './styles';

import { BackgroundButton } from '../Buttons/BackgroundButton';

type Props = {
  onPress: Function,
};
class GetStarted extends React.PureComponent<Props> {
  state = {
    showButton: new Animated.Value(-120),
  };

  componentDidMount() {
    const { showButton } = this.state;
    Animated.timing(showButton, {
      toValue: 20,
      duration: 700,
    }).start();
  }

  render() {
    const { onPress } = this.props;
    const { showButton } = this.state;

    return (
      <Animated.View style={[styles.container, { bottom: showButton }]}>
        <BackgroundButton text="Начать" bold onPress={onPress} />
      </Animated.View>
    );
  }
}

export default GetStarted;
