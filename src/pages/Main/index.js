import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/Components/Header';
import Tabs from '~/Components/Tabs';
import Menu from '~/Components/Menu';

import {
  Container, Content, Title, Card, CardContent, CardHeader, CardFooter, Description, Annotation,
} from './styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },

    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {

  }
  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }],
          }}
          >
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
        </PanGestureHandler>

      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
