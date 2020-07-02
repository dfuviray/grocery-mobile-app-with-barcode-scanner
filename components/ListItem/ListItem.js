import React from 'react';
import { View, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
  Container,
  IconContainer,
  Title,
  ItemText,
  Price,
  Qty,
  Total,
  Label,
} from './ListItemStyles';
import Icon from '../Icon/Icon';

export default function ListItem({
  name,
  type,
  price,
  qty,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Container>
        <IconContainer>
          <Icon type={type} />
        </IconContainer>
        <Title>
          <ItemText type="title">{name}</ItemText>
        </Title>
        <Price>
          <ItemText>${price}</ItemText>
        </Price>
        <Label>
          <ItemText>x</ItemText>
        </Label>
        <Qty>
          <ItemText>{qty}</ItemText>
        </Qty>
        <Total>
          <ItemText>${price * qty}</ItemText>
        </Total>
      </Container>
    </Swipeable>
  );
}
