import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/Components/Header';
import Tabs from '~/Components/Tabs';
import Menu from '~/Components/Menu';

import {
  Container, Content, Title, Card, CardContent, CardHeader, CardFooter, Description, Annotation
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponível da galera:</Title>
            <Description>R$ 1.00 BILHÃO</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência feita após você salvar a cidade de NY: R$ 5.000.000,00
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
