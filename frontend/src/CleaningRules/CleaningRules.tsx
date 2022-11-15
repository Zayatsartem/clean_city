import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import check from './images/check.png';
import kitchen from './images/kitchen.jpg';
import flat from './images/flat.jpg';
import bathroom from './images/bathroom.jpg';
import './cleaningrules.css';

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
            <Item>
              <div className="imgItemBlock">
                <h3>Вся квартира</h3>
                <img src={flat} alt="flat" className="serviceImg" />
              </div>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <span>Входит в стандартную уборку</span>
              <div className="serviceList">
                <div className="service">
                  <img src={check} alt="check" />
                  <span>Влажная уборка </span>
                </div>
                <div className="service">
                  <img src={check} alt="check" />
                  <span>Влажная уборка </span>
                </div>
                <div className="service">
                  <img src={check} alt="check" />
                  <span>Влажная уборка </span>
                </div>
                <div className="service">
                  <img src={check} alt="check" />
                  <span>Влажная уборка </span>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>Можно добавить</Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <div className="imgItemBlock">
                <h3>Кухня</h3>
                <img src={kitchen} alt="kitchen" className="serviceImg" />
              </div>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <span>Входит в стандартную уборку</span>
              <div className="serviceList">
                <div className="service">
                  <img src={check} alt="check" />
                  <span>Влажная уборка </span>
                </div>
                <div className="service">
                  <img src={check} alt="check" />
                  <span>Влажная уборка </span>
                </div>
                <div className="service">
                  <img src={check} alt="check" />
                  <span>Влажная уборка </span>
                </div>
                <div className="service">
                  <img src={check} alt="check" />
                  <span>Влажная уборка </span>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>Можно добавить</Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <div className="imgItemBlock">
                <h3>Санузел</h3>
                <img src={bathroom} alt="bathroom" className="serviceImg" />
              </div>
            </Item>
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
