import React from 'react';

import { View, TextInput, Image } from 'react-native';

import styles from './styles';

type Props = {
  onChange: Function,
  value: String,
  placeholder: String,
  secure: Boolean,
  id: String,
  disable: Boolean,
  icon: String,
};
class InputFormTransparent extends React.PureComponent<Props> {
  cangeValue = (val) => {
    const { id, onChange } = this.props;
    onChange(id, val);
  };

  render() {
    const {
      value, placeholder, secure, disable, icon,
    } = this.props;
    return (
      <View style={styles.container}>
        <Image source={icon} style={styles.iconStyle} />
        <TextInput
          onChangeText={this.cangeValue}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="rgba(255,255,255,.4)"
          style={styles.inputStyle}
          secureTextEntry={secure}
          editable={!disable}
        />
      </View>
    );
  }
}

export default InputFormTransparent;
