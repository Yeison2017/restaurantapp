import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Button, Text} from 'native-base';

const NuevaOrden = () => {
  return (
    <Container>
      <View>
        <Button rounded block>
          <Text>Crear Nueva Orden</Text>
        </Button>
      </View>
    </Container>
  );
};

export default NuevaOrden;
