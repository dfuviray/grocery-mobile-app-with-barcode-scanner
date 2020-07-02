import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './HomeScreenStyles';
import HeaderContainer from '../../components/Header/HeaderContainer';
import BodyContainer from '../../components/Body/BodyContainer';

export default function HomeScreen() {
  return (
    <Container>
      <HeaderContainer />
      <BodyContainer />
    </Container>
  );
}
