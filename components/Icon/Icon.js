import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { colors } from '../../config/colors';

export const Container = styled.View`
  width: 30px;
  height: 30px;
  background-color: ${(props) => colors[props.bgColor]};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

function Icon({ type = 'tree' }) {
  return (
    <Container bgColor={type}>
      <MaterialCommunityIcons name={type} size={15} color="white" />
    </Container>
  );
}

export default Icon;
