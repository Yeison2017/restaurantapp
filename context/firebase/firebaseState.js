import React, {useReducer} from 'react';

import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import firebaseReducer from './firebaseReducer';

const FirebaseState = (props) => {
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch para ejecutar las funciones
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
      }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
