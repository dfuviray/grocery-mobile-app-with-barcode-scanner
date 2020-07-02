import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
  width: 100%;
  background-color: transparent;
`;
