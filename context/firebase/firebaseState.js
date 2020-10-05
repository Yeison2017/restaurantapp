import React, {useReducer} from 'react';

import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import {OBTENER_PRODUCTOS_EXITO} from '../../types';

const FirebaseState = (props) => {
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    // console.log('desde firebaseState');
    // consultar firebase
    firebase.db
      .collection('productos')
      .where('existencia', '==', true) // traer solo los que estén en existencia true
      .onSnapshot(manejarSnapshot);

    function manejarSnapshot(snapshot) {
      let platillos = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      console.log(platillos);

      // Tenemos resultados de la base de datos
      dispatch({
        type: OBTENER_PRODUCTOS_EXITO,
        payload: platillos,
      });
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
      }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
