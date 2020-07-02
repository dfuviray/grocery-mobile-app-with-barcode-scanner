import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { colors } from '../../config/colors';

const Container = styled.View`
  width: 50px;
  background-color: ${(props) => colors[props.color]};
  justify-content: center;
  align-items: center;
`;
export default function AppButton({
  onPress,
  icon = 'edit',
  color = 'yellow',
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container color={color}>
        <MaterialIcons name={icon} size={20} color="white" />
      </Container>
    </TouchableWithoutFeedback>
  );
}
