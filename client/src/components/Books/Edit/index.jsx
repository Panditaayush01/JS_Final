import React, { useEffect, useState, useContext } from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

const Edit = () => {
  const { id } = useParams();
  const [preload, setPreload] = useState({});
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/books/${id}`)
      .then(({ data }) => {
        setPreload(data);
        setNotification({
          type: "primary",
          message: `The Book is under updation!`
        });
      })
      .catch(error => {
        setNotification({
          type: "danger",
          message: `There was an error retrieving the quote: ${error.message}`
        });
      });
  }, [globalStore, id, setNotification]);

  return (
    <>
      <Header title="Books">
        Welcome Shaun Micknnon to my library.
      </Header>

      <Container>
        <Form endpoint="books/update" preload={preload} />
      </Container>
    </>
  );
}

export default Edit;