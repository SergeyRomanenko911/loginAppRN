import React, { useState } from 'react';

import { connect } from 'react-redux';

import { WellcomeBackground } from '../../components/WellcomeBackground';
import { LoginForm } from '../../components/LoginForm';
import { LoaderComponent } from '../../components/LoaderComponent';

import { authEmailRequest, cleanAuthError } from '../../action/Auth';

const img = {
  bc: require('../../../assets/images/bc.png'),
};

type Props = {
  navigation: Object,
  loginEmail: Function,
  cleanError: Function,
  error: Object,
  fetch: Boolean,
};

const Login = (props: Props) => {
  const {
    error, fetch, cleanError, navigation, loginEmail,
  } = props;

  const [data, setData] = useState({ email: null, password: null });

  const onSelect = (id, value) => {
    setData({
      ...data,
      [id]: value,
    });
  };

  const signIn = () => {
    loginEmail(data);
  };

  const signUp = () => {
    cleanError();
    navigation.navigate('Register');
  };

  return (
    <WellcomeBackground image={img.bc} topText="Логин" secondText="Вход в личный аккаунт">
      {fetch ? <LoaderComponent /> : null}
      <LoginForm
        onSelect={onSelect}
        signIn={signIn}
        data={data}
        goRegister={signUp}
        error={error}
      />
    </WellcomeBackground>
  );
};

function mapStateToProps(state) {
  return {
    error: state.Auth.error,
    fetch: state.Auth.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginEmail: data => dispatch(authEmailRequest(data)),
    cleanError: () => dispatch(cleanAuthError()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
