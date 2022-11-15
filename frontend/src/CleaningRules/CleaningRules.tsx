import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CleaningRules(): JSX.Element {
  return (
    <div className="container">
      <h3>Регламент уборки</h3>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid xs={4}>
            <Item>Вся квартира</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Входит в стандартную уборку</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Можно добавить</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Кухня</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Входит в стандартную уборку</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Можно добавить</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Санузел</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Входит в стандартную уборку</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Можно добавить</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
