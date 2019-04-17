import React from 'react';

import {
  View, Text, Image, Animated,
} from 'react-native';

import styles from './styles';

type Props = {
  children: any,
  image: String,
  topText: String,
  secondText: String,
};

type State = {
  fadeLogo: any,
};
class WellcomeBackground extends React.PureComponent<Props, State> {
  state = {
    fadeLogo: new Animated.Value(0),
  };

  componentDidMount() {
    const { fadeLogo } = this.state;
    Animated.timing(fadeLogo, {
      toValue: 1,
      duration: 3000,
    }).start();
  }

  render() {
    const {
      children, image, topText, secondText,
    } = this.props;
    const { fadeLogo } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ position: 'absolute' }}>
          <Image source={image} style={styles.img} />
          <Animated.View style={[styles.logoContainer, { opacity: fadeLogo }]}>
            <Text style={styles.textTop}>{topText}</Text>
            <Text style={styles.secondText}>{secondText}</Text>
          </Animated.View>
        </View>
        <View style={{ flex: 1 }}>{children}</View>
      </View>
    );
  }
}

export default WellcomeBackground;
