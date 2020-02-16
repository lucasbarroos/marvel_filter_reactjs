/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import { Container, ModalBody, ModalHeader, ModalText, ModalTitle, ModalDescriptionTitle, ModalDescription, ModalButton } from './styles';

export default function HeroeModal({ data, closeModal }) {

  const pictureUriFormatter = (uri) => `${uri}/landscape_incredible.jpg`;

  return (
    <Container>
      <ModalBody>
        <ModalHeader style={{ backgroundImage: `url(${pictureUriFormatter(data.thumbnail?.path)})` }} />
        <ModalText>
          <ModalTitle>{data.name}</ModalTitle>
          <ModalDescriptionTitle>Description:</ModalDescriptionTitle>
          <ModalDescription>
            {
              data.description ? data.description : ' No description.'
            }
          </ModalDescription>
          <ModalButton>
            <Button variant="contained" color="secondary" onClick={closeModal}>Close</Button>
          </ModalButton>
        </ModalText>
      </ModalBody>
    </Container>
  );
};