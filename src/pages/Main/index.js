import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from './styles';
import Service from '../../services/Service';
import HeroeCard from '../../components/HeroeCard';
import Header from '../../components/Header';
import HeroeModal from '../../components/HeroeModal';

const service = new Service();

export default function Dashboard() {
  const [name, setName] = React.useState('Spider');
  const [characters, setCharacters] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const loadDashboard = async () => {
    const result = await service.show('characters', { name });
    setCharacters(result.data.data.results);
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const changeName = async (e) => {
    setName(e.target.value);
  };

  const search = async () => {
    const result = await service.show('characters', { name });
    setCharacters(result.data.data.results);
  }

  const handleCard = (data) => {
    setModalData(data);
    setOpen(!open);
    document.body.style.overflow_y = open ? 'initial' : 'hidden';
  };

  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow_y = open ? 'initial' : 'hidden';
  }

  return (
    <Container>
      <Header name={name} changeName={changeName} search={search} />
      <Grid container spacing={2}>
        {
          characters.map((element) => {
            return (
              <Grid item lg={4}>
                <Grid container justify="center" spacing={1} onClick={() => { handleCard(element); }}>
                  <HeroeCard data={element} />
                </Grid>
              </Grid>
            )
          })
        }
      </Grid>
      {open ? <HeroeModal data={modalData} closeModal={closeModal} /> : ``}
    </Container>
  );
}
