/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '/home/andreabenf/Documentos/React/Native/CloneNU/CloneNu/src/assets/Nubank_Logo.png';
import {
    Container, Top, Logo, Title,
} from './styles';

export default function Header() {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>André</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </Container>
    );
}
