import React, { useContext } from 'react';
import { Text, FlatList, View, ScrollView, Button } from 'react-native';

import GroceryContext from '../../context/GroceryContext';
import {
  Container,
  TotalContainer,
  Title,
  ItemText,
  TextHeader,
  ModalContainer,
  ModalSubContainer,
  QuantityContainer,
  styles,
} from './BodyStyles';
import ListItem from '../ListItem/ListItem';
import ItemSeparator from '../ItemSeparator/ItemSeparator';
import AppButton from './AppButton';

export default function BodyContainer() {
  const groceryItems = useContext(GroceryContext);
  return (
    <>
      <Container>
        <TotalContainer>
          <Title>Total</Title>
          <TextHeader>{groceryItems.total()}</TextHeader>
        </TotalContainer>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: '100%' }}
        >
          <FlatList
            data={groceryItems.value}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListItem
                name={item.name}
                type={item.type}
                price={item.price}
                qty={item.qty}
                renderRightActions={() => (
                  <>
                    <AppButton
                      onPress={() => groceryItems.onDelete(item)}
                      icon="delete"
                      color="red"
                    />
                    <AppButton
                      onPress={() => groceryItems.onSelectItem(item)}
                    />
                  </>
                )}
              />
            )}
            ItemSeparatorComponent={() => <ItemSeparator />}
          />
        </ScrollView>
      </Container>
      <ModalContainer
        animationType="slide"
        visible={groceryItems.modal}
        transparent
      >
        <ModalSubContainer style={styles.shadow}>
          <AppButton
            icon="close"
            color="red"
            onPress={() => groceryItems.toggleModal()}
          />
          <TextHeader margin>{groceryItems.selectedItem.name}</TextHeader>
          <QuantityContainer>
            <AppButton
              icon="arrow-drop-down"
              onPress={() => groceryItems.onQuantityDecrease()}
            />
            <TextHeader>{groceryItems.selectedItem.qty}</TextHeader>
            <AppButton
              icon="arrow-drop-up"
              onPress={() => groceryItems.onQuantityIncrease()}
            />
          </QuantityContainer>
        </ModalSubContainer>
      </ModalContainer>
    </>
  );
}
