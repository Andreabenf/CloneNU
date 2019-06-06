/* eslint-disable react/jsx-indent */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, TabsItem, TabsContainer, TabsText,
} from './styles';

export default function Tabs({ translateY }) {
  return (
        <Container style={{
          transform: [{
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 60],
            }),
          }],
          opacity: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [1, 0.3],
            extrapolate: 'clamp',
          }),
        }}
        >
            <TabsContainer>
                <TabsItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabsText>Indicar a galere</TabsText>
                </TabsItem>
                <TabsItem>
                    <Icon name="chat-bubble-outline" size={24} color="#FFF" />
                    <TabsText>Cobar a galerinha</TabsText>
                </TabsItem>
                <TabsItem>
                    <Icon name="arrow-downward" size={24} color="#FFF" />
                    <TabsText>Depositar pra galerinha</TabsText>
                </TabsItem>
                <TabsItem>
                    <Icon name="arrow-upward" size={24} color="#FFF" />
                    <TabsText>Transferir</TabsText>
                </TabsItem>
                <TabsItem>
                    <Icon name="lock" size={24} color="#FFF" />
                    <TabsText>Bloquear cartão da galera</TabsText>
                </TabsItem>
            </TabsContainer>
        </Container>
  );
}
