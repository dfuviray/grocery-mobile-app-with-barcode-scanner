import React from 'react';
import { Text } from 'react-native';

import { Container } from './HeaderStyles.js';
import BarcodeScanner from '../BarcodeScanner/BarcodeScanner';

export default function HeaderContainer() {
  return (
    <Container>
      <BarcodeScanner />
    </Container>
  );
}
