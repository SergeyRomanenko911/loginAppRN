import React from 'react';

import { View } from 'react-native';

import styles from './styles';

type Props = {
  children: any,
  content: String,
};
class Container extends React.PureComponent<Props> {
  render() {
    const { children, content = 'flex-start' } = this.props;
    return <View style={[styles.container, { justifyContent: content }]}>{children}</View>;
  }
}

export default Container;
