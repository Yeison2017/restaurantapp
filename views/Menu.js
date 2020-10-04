import React, {useContext, useEffect} from 'react';
import {Text} from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';

const Menu = () => {
  // Context de Firebase
  const {obtetenerProductos} = useContext(FirebaseContext);

  useEffect(() => {
    obtetenerProductos();
  }, []);

  return <Text>Menu</Text>;
};

export default Menu;
