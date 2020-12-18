import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Books">
        Welcome Shuan Micknnon to my library.
      </Header>

      <Container>
        <Form endpoint="books" />
      </Container>
    </>
  );
}

export default New;