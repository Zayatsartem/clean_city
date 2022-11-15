import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import check from './images/check.png';
import plus from './images/plus.png';
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
      <Item sx={{ boxShadow: 'none' }}>
        <h1>Регламент уборки</h1>
      </Item>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid xs={4}>
            <Item sx={{ boxShadow: 'none' }}>
              <div className="imgItemBlock">
                <h3>Вся квартира</h3>
                <img src={flat} alt="flat" className="serviceImg" />
              </div>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item sx={{ boxShadow: 'none' }}>
              <h3>Входит в стандартную уборку</h3>
              <div className="serviceList">
                <div className="service">
                  <span>Помыть пол</span>
                  <img src={check} alt="check" />
                </div>
                <div className="service">
                  <span>Протереть пыль</span>
                  <img src={check} alt="check" />
                </div>
                <div className="service">
                  <span>Почистить ковровые покрытия</span>
                  <img src={check} alt="check" />
                </div>
                <div className="service">
                  <span>Помыть зеркала</span>
                  <img src={check} alt="check" />
                </div>
                <div className="service">
                  <span>Застелить постель</span>
                  <img src={check} alt="check" />
                </div>
                <div className="service">
                  <span>Вынести мусор</span>
                  <img src={check} alt="check" />
                </div>
              </div>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item sx={{ boxShadow: 'none' }}>
              <h3>Можно добавить</h3>
              <div className="serviceList">
                <div className="service">
                  <span>Убрать балкон</span>
                  <img src={plus} alt="plus" />
                </div>
                <div className="service">
                  <span>Погладить вещи</span>
                  <img src={plus} alt="plus" />
                </div>
                <div className="service">
                  <span>Помыть люстру</span>
                  <img src={plus} alt="plus" />
                </div>
                <div className="service">
                  <span>Помыть окно</span>
                  <img src={plus} alt="plus" />
                </div>
                <div className="service">
                  <span>Помыть балконное остекление</span>
                  <img src={plus} alt="plus" />
                </div>
              </div>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item sx={{ boxShadow: 'none' }}>
              <div className="imgItemBlock">
                <h3>Кухня</h3>
                <img src={kitchen} alt="kitchen" className="serviceImg" />
              </div>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item sx={{ boxShadow: 'none' }}>
              <h3>Входит в стандартную уборку</h3>
              <div className="serviceList">
                <div className="service">
                  <span>Помыть посуду</span>
                  <img src={check} alt="check" />
                </div>
                <div className="service">
                  <span>Помыть плиту</span>
                  <img src={check} alt="check" />
                </div>
                <div className="service">
                  <span>Помыть раковину</span>
                  <img src={check} alt="check" />
                </div>
                <div className="service">
                  <span>Помыть столешницу</span>
                  <img src={check} alt="check" />
                </div>
                <div className="service">
                  <span>Помыть холодильник снаружи</span>
                  <img src={check} alt="check" />
                </div>
                <div className="service">
                  <span>Помыть обеденный стол</span>
                  <img src={check} alt="check" />
                </div>
              </div>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item sx={{ boxShadow: 'none' }}>
              <h3>Можно добавить</h3>
              <div className="serviceList">
                <div className="service">
                  <span>Помыть холодильник внутри</span>
                  <img src={plus} alt="plus" />
                </div>
                <div className="service">
                  <span>Помыть духовку</span>
                  <img src={plus} alt="plus" />
                </div>
                <div className="service">
                  <span>Помыть микроволновку</span>
                  <img src={plus} alt="plus" />
                </div>
                <div className="service">
                  <span>Помыть кухонные шкафы</span>
                  <img src={plus} alt="plus" />
                </div>
              </div>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item sx={{ boxShadow: 'none' }}>
              <div className="imgItemBlock">
                <h3>Санузел</h3>
                <img src={bathroom} alt="bathroom" className="serviceImg" />
              </div>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item sx={{ boxShadow: 'none' }}>
              <h3>Входит в стандартную уборку</h3>
              <div className="serviceList">
                <div className="service">
                  <span>Помыть ванную и(или) душевую</span>
                  <img src={check} alt="check" />
                </div>
                <div className="service">
                  <span>Помыть раковину</span>
                  <img src={check} alt="check" />
                </div>
                <div className="service">
                  <span>Помыть унитаз</span>
                  <img src={check} alt="check" />
                </div>
                <div className="service">
                  <span>Помыть биде</span>
                  <img src={check} alt="check" />
                </div>
              </div>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item sx={{ boxShadow: 'none' }}>
              <h3>Можно добавить</h3>
              <div className="serviceList">
                <div className="service">
                  <span>Помыть лоток питомца</span>
                  <img src={plus} alt="plus" />
                </div>
                <div className="service">
                  <span>Удалить плесень</span>
                  <img src={plus} alt="plus" />
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
