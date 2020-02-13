import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from './styles';
import Service from '../../services/Service';
import HeroeCard from '../../components/HeroeCard';

const service = new Service();

export default function Dashboard() {
  const [characters, setCharacters] = useState([])

  useEffect(async () => {
    const result = await service.show('characters');
    setCharacters(result.data.data.results);
  }, []);

  return (
    <Container>
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
