import React from 'react';

import { View, TextInput } from 'react-native';

import styles from './styles';

type Props = {
  onChange: Function,
  value: String,
  placeholder: String,
  secure: Boolean,
  id: String,
  disable: Boolean,
  onFocus: Function,
  onBlur: Function,
};
class InputForm extends React.PureComponent<Props> {
  cangeValue = (val) => {
    const { id, onChange } = this.props;
    onChange(id, val);
  };

  render() {
    const {
      value, placeholder, secure, disable, onFocus = null, onBlur = null,
    } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.cangeValue}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="rgba(13, 38, 77,.3)"
          style={styles.inputStyle}
          secureTextEntry={secure}
          editable={!disable}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
    );
  }
}

export default InputForm;
