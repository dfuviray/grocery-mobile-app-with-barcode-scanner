import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../config/colors';

export const Container = styled.View`
  background: ${colors['grey-light']};
  width: 95%;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  align-self: center;
  justify-content: center;
  flex-direction: row;
`;
export const ItemText = styled.Text`
  color: ${colors.grey};
  text-align: ${(props) => (props.type == 'title' ? 'left' : 'center')};
`;

export const IconContainer = styled.View`
  flex: 1;
  align-self: center;
  justify-content: center;
`;

export const Title = styled.View`
  flex: 5;
  align-self: center;
  justify-content: center;
`;
export const Price = styled.View`
  flex: 1;
  align-self: center;
  justify-content: center;
`;
export const Label = styled.View`
  flex: 1;
  align-self: center;
  justify-content: center;
`;
export const Qty = styled.View`
  flex: 1;
  align-self: center;
  justify-content: center;
`;
export const Total = styled.View`
  flex: 1;
  align-self: center;
  justify-content: center;
`;
