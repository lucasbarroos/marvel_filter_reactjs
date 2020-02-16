import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from './styles';
import Service from '../../services/Service';
import HeroeCard from '../../components/HeroeCard';
import Header from '../../components/Header';

const service = new Service();

export default function Dashboard() {
  const [name, setName] = React.useState('Hulk');
  const [characters, setCharacters] = useState([])

  useEffect(async () => {
    const result = await service.show('characters', { name });
    setCharacters(result.data.data.results);
  }, []);

  const changeName = async (e) => {
    setName(e.target.value);
  };

  const search = async () => {
    const result = await service.show('characters', { name });
    setCharacters(result.data.data.results);
  }

  return (
    <Container>
      <Header name={name} changeName={changeName} search={search} />
      <Grid container spacing={2}>
        {
          characters.map((element) => {
            return (
              <Grid item lg={4}>
                <Grid container justify="center" spacing={1}>
                  <HeroeCard data={element} />
                </Grid>
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  );
}
