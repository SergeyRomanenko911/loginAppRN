import React from 'react';

import { Container } from '../../components/Container';
import { WellcomeBackground } from '../../components/WellcomeBackground';
import { GetStarted } from '../../components/GetStarted';

const img = {
  bc: require('../../../assets/images/bc.png'),
};

type Props = {
  navigation: Object,
};

const Wellcome = (props: Props) => {
  const goStart = () => {
    const { navigation } = props;
    navigation.navigate('Auth');
  };

  return (
    <WellcomeBackground image={img.bc} topText="Привет" secondText="Это тестовое приложение">
      <Container content="flex-end">
        <GetStarted onPress={goStart} />
      </Container>
    </WellcomeBackground>
  );
};

export default Wellcome;
