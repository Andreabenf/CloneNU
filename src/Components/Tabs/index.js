/* eslint-disable react/jsx-indent */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
 Container, TabsItem, TabsContainer, TabsText,
} from './styles';

export default function Tabs() {
  return (
        <Container>
            <TabsContainer>
                <TabsItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabsText>Indicar a galere</TabsText>
                </TabsItem>
            </TabsContainer>
        </Container>
  );
}
