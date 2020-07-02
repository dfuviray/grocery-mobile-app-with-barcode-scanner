import React, { useState } from 'react';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import GroceryContext from './context/GroceryContext';
const data = [
  { id: '037600240345', name: 'Spam Less Sodium', price: 4, type: 'soy-sauce' },
  { id: '071615901013', name: 'Hereford Corned Beef', price: 3, type: 'tree' },
  {
    id: '748485800011',
    name: 'Argentina Corned Beef',
    price: 2,
    type: 'tumble-dryer',
  },
];

const cartData = [];

export default function App() {
  const [items, setItems] = useState(data);
  const [cart, setCart] = useState(cartData);
  const [modal, setModal] = useState(false);
  const [selectedItem, setselectedItem] = useState('');

  const handleDeleteItem = (item) => {
    const cartItems = [...cart];
    setCart(cartItems.filter((c) => c.id != item.id));
  };

  function getTotal() {
    return cart
      .map((item) => item)
      .reduce((total, item) => total + item.qty * item.price, 0);
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSelect = (item) => {
    setselectedItem(item);
    toggleModal();
  };

  const handleQuantityIncrease = () => {
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((c) => c.id == selectedItem.id);
    cartCopy[index].qty++;

    setselectedItem(cartCopy[index]);
    setCart(cartCopy);
  };
  const handleQuantityDecrease = () => {
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((c) => c.id == selectedItem.id);
    cartCopy[index].qty--;

    setselectedItem(cartCopy[index]);
    setCart(cartCopy);
  };

  const handleAddItem = (id) => {
    const cartCopy = [...cart];
    const item = items.find((i) => i.id == id);
    const itemResult = cartCopy.find((i) => i.id == id);

    if (itemResult) {
      itemResult.qty = itemResult.qty + 1;
    } else cartCopy.push({ ...item, qty: 1 });
    setCart(cartCopy);
    console.log(itemResult);
  };

  return (
    <GroceryContext.Provider
      value={{
        value: cart,
        onDelete: handleDeleteItem,
        onSelectItem: handleSelect,
        onQuantityIncrease: handleQuantityIncrease,
        onQuantityDecrease: handleQuantityDecrease,
        onAddItem: handleAddItem,
        selectedItem: selectedItem,
        total: getTotal,
        toggleModal: toggleModal,
        modal: modal,
      }}
    >
      <HomeScreen />
    </GroceryContext.Provider>
  );
}
