import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../config/colors';

export const Container = styled.View`
  flex: 7;
  width: 100%;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const TotalContainer = styled.View`
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-self: center;
  padding-left: 10px;
  padding-right: 10px;
  margin: 20px 0;
`;

export const Title = styled.Text`
  color: ${colors.grey};
`;
export const TextHeader = styled.Text`
  color: ${colors.grey};
  font-size: 20px;
  margin-top: ${(props) => (props.margin ? '30px' : '10px')};
  margin-bottom: ${(props) => (props.margin ? '30px' : '0px')};
`;

export const ItemText = styled.Text`
  color: ${colors.grey};
`;

export const ModalContainer = styled.Modal`
  width: 100%;
  height: 300px;

  padding: 10px;
  border-color: ${colors['grey-light']};
  justify-content: center;
  align-items: center;
`;

export const ModalSubContainer = styled.View`
  justify-content: center;
  align-items: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: ${Dimensions.get('window').height -
  Dimensions.get('window').height / 3}px;
  width: 100%;
  height: ${Dimensions.get('window').height / 3}px;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.grey,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 0.5,
  },
});

export const QuantityContainer = styled.View`
  flex-direction: row;
  height: 40px;
  width: 300px;
  justify-content: space-around;
  align-items: center;
`;
