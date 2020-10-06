import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Form,
  Icon,
  Input,
  Grid,
  Col,
  Button,
  Text,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/global';

import PedidoContext from '../context/pedidos/pedidosContext';
import globlalStyles from '../styles/global';

const FormularioPlatillo = () => {
  return (
    <Container>
      <Content>
        <Form>
          <Text style={globalStyles.titulo}>Cantidad</Text>
          <Grid>
            <Col>
              <Button>
                <Icon name="remove" />
              </Button>
            </Col>
            <Col></Col>
            <Col>
              <Icon name="add" />
            </Col>
          </Grid>
        </Form>
      </Content>
    </Container>
  );
};

export default FormularioPlatillo;
