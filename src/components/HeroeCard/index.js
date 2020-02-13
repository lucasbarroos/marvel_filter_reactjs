/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from './styles';

export default function HeroeCard({ data }) {

  const pictureUriFormatter = (uri) => `${uri}/portrait_uncanny.jpg`;

  return (
    <Container style={{ backgroundImage: `url(${pictureUriFormatter(data.thumbnail?.path)})` }}>
      {data.name}
    </Container>
  );
}

