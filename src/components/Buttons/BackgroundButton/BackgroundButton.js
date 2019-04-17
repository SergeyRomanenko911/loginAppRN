/**
 * @format
 * @flow
 * */

import React from 'react';

import { Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

type Props = {
  onPress: Function,
  text: String,
  icon: String,
  route: String,
  isWithWidth: Boolean,
  backgroundColor: String,
  textColor: String,
  borderColor: String,
  bold: Boolean,
  withoutRadius: Boolean,
};
class BackgroundButton extends React.PureComponent<Props> {
  render() {
    const {
      onPress,
      text,
      icon,
      route,
      isWithWidth = false,
      textColor = '#fff',
      borderColor = 'rgb(221,54,78)',
      backgroundColor = 'rgb(221,54,78)',
      bold = false,
      withoutRadius = false,
    } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          isWithWidth ? styles.containerWithWidth : styles.container,
          {
            backgroundColor,
            borderColor,
            borderRadius: withoutRadius ? 0 : styles.container.borderRadius,
          },
        ]}
      >
        {icon ? <Image style={styles.iconStyle} source={icon} /> : null}
        {text ? (
          <Text
            style={[
              styles.textBody,
              { color: textColor, fontFamily: bold ? 'Rubik-Bold' : 'Rubik' },
            ]}
          >
            {text}
          </Text>
        ) : null}
        {route ? <Text style={styles.textRoute}>{route}</Text> : null}
      </TouchableOpacity>
    );
  }
}

export default BackgroundButton;
