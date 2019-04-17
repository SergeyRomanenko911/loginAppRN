import React from 'react';

import {
  View, TouchableOpacity, Image, Text,
} from 'react-native';

import styles from './styles';

const img = {
  right: require('../../../assets/images/right-arrow.png'),
};

type Props = {
  onPress: Function,
  title: String,
};
class HeaderWithBack extends React.PureComponent<Props> {
  render() {
    const { onPress, title } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.btn}>
          <Image source={img.right} style={styles.imgClose} />
        </TouchableOpacity>
        <Text style={styles.textTitle}>{title}</Text>
        <View />
      </View>
    );
  }
}
export default HeaderWithBack;
