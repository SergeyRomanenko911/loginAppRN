import React from 'react';

import { Modal, ActivityIndicator, View } from 'react-native';

import styles from './styles';

class LoaderComponent extends React.PureComponent {
  state = {};

  render() {
    return (
      <Modal transparent>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="rgb(221,54,78)" />
        </View>
      </Modal>
    );
  }
}

export default LoaderComponent;
