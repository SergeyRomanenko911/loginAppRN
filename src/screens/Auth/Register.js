import React, { useState } from 'react';

import { ColorPicker } from 'react-native-color-picker';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { Container } from '../../components/Container';
import { WellcomeBackground } from '../../components/WellcomeBackground';
import { BackgroundButton } from '../../components/Buttons/BackgroundButton';
import { HeaderWithBack } from '../../components/HeaderWithBack';
import { ErrorText } from '../../components/ErrorText';
import { TitleText } from '../../components/TitleText';
import { LoaderComponent } from '../../components/LoaderComponent';
import { InputFormTransparent } from '../../components/InputFormTransparent';
import { registerCustomerRequest, cleanRegisterError } from '../../action/Register';

const img = {
  user: require('../../../assets/images/avatar.png'),
  message: require('../../../assets/images/message.png'),
  key: require('../../../assets/images/key.png'),
};

type Props = {
  navigation: Object,
  onRegister: Function,
  cleanError: Function,
  error: Object,
  fetch: Boolean,
};
const Register = (props: Props) => {
  const {
    navigation, cleanError, onRegister, error, fetch,
  } = props;
  const [data, setData] = useState({
    name: null,
    email: null,
    password: null,
    color: '#ffffff',
  });

  const signUp = () => {
    onRegister(data);
  };

  const goBack = () => {
    cleanError();
    navigation.goBack();
  };

  const onSelect = (id, value) => {
    setData({
      ...data,
      [id]: value,
    });
  };

  const renderErrors = () => {
    if (!error) {
      return null;
    }
    return Object.keys(error).map(key => <ErrorText key={key}>{error[key][0]}</ErrorText>);
  };

  const onChangeColor = (color) => {
    onSelect('color', color);
  };

  return (
    <WellcomeBackground>
      {fetch ? <LoaderComponent /> : null}
      <Container content="space-between">
        <View>
          <HeaderWithBack onPress={goBack} title="Регистрация" />
          <TitleText>Вводите данные</TitleText>
          <InputFormTransparent
            icon={img.user}
            id="name"
            onChange={onSelect}
            value={data.name}
            placeholder="Введите имя"
          />
          <InputFormTransparent
            icon={img.message}
            id="email"
            onChange={onSelect}
            value={data.email}
            placeholder="Введите email"
          />
          <InputFormTransparent
            icon={img.key}
            id="password"
            secure
            onChange={onSelect}
            value={data.password}
            placeholder="Введите пароль"
          />
          <ColorPicker
            onColorSelected={onChangeColor}
            style={{ height: 200 }}
            defaultColor={data.color}
          />
          <View style={{ height: 100, backgroundColor: data.color, borderRadius: 10 }} />

          {renderErrors()}
        </View>
        <BackgroundButton text="Регистрация" onPress={signUp} bold />
      </Container>
    </WellcomeBackground>
  );
};

function mapStateToProps(state) {
  return {
    stateRedux: state.Register,
    error: state.Register.error,
    fetch: state.Register.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRegister: data => dispatch(registerCustomerRequest(data)),
    cleanError: () => dispatch(cleanRegisterError()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
