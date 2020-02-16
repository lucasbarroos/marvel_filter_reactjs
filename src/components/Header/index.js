import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { HeaderBody, HeaderTitle } from './styles';

// eslint-disable-next-line react/prop-types
export default function Header({ name, changeName, search }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  }

  return (
    <HeaderBody>
      <HeaderTitle>Marvel Portal</HeaderTitle>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Grid container justify="center" spacing={1}>
            <TextField
              id="standard-multiline-flexible"
              label="Type the Name and Press Enter"
              value={name}
              onChange={changeName}
              onKeyDown={handleKeyDown}
              style={{ width: '50%', backgroundColor: 'rgba(0, 0, 0, 0) !important', position: 'absolute', bottom: -60 }}
            />
          </Grid>
        </Grid>
      </Grid>
    </HeaderBody>
  );
}