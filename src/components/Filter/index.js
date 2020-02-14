import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { FilterBody } from './styles';

export default function Filter() {
  const [name, setName] = React.useState('Lucas');

  return (
    <FilterBody>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Grid container justify="center" spacing={1}>
            <TextField
              id="standard-multiline-flexible"
              label="Name"
              value={name}
              onChange={(e) => { setName(e.target.value); }}
              style={{ width: '100%' }}
              color="secondary"
            />
          </Grid>
        </Grid>
      </Grid>
    </FilterBody>
  );
}