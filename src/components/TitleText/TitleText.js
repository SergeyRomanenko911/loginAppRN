import React from 'react';

import { Text } from 'react-native';

import styles from './styles';

type Props = {
  children: Object,
};

class TitleText extends React.Component<Props> {
  state = {};

  render() {
    const { children } = this.props;
    return <Text style={styles.title}>{children}</Text>;
  }
}

export default TitleText;
