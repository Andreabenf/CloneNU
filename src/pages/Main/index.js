import React from 'react';

import Header from '~/Components/Header';
import Tabs from '~/Components/Tabs';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  );
}
