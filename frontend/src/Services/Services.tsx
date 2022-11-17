import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Unstable_Grid2';
// import Item from '@mui/material/Item';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { CardContent, CardMedia, Typography } from '@mui/material';
import wet_cleaning from './images/wet_cleaning.jpg';
import furniture_dry_cleaning from './images/furniture_dry_cleaning.jpg';
import lawn_mowing from './images/lawn_mowing.jpg';
import snow_removal from './images/snow_removal.jpg';
import cleaning_of_large_rooms from './images/cleaning_of_large_rooms.jpg';
import cleaning_of_adjacent_territories from './images/cleaning_of_adjacent_territories.jpg';
import window_washing from './images/window_washing.jpg';
import carpet_cleaning from './images/carpet_cleaning.jpg';
import './services.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Services(): JSX.Element {
  return (
    <>
      <h2 className="componentHeader">Наши возможности</h2>
      <Box sx={{ width: '100%' }}>
        <div className="GridsList">
          <Item
            className="gridItem"
            sx={{
              boxShadow: 'none',
              color: '#000080',
              objectFit: 'fill',
            }}
          >
            <CardMedia component="img" height="200" image={wet_cleaning} alt="wet_cleaning" />
            <CardContent>
              <Typography
                gutterBottom
                variant="body1"
                width="100%"
                component="div"
                margin="auto"
                align="center"
              >
                Влажная уборка квартир и домов
              </Typography>
            </CardContent>
          </Item>
          <Item className="gridItem" sx={{ boxShadow: 'none', color: '#000080' }}>
            <CardMedia
              component="img"
              height="200"
              image={furniture_dry_cleaning}
              alt="furniture_dry_cleaning"
            />
            <CardContent sx={{ width: '100%' }}>
              <Typography
                gutterBottom
                variant="body1"
                width="100%"
                component="div"
                margin="auto"
                align="center"
              >
                Xимчистка мебели
              </Typography>
            </CardContent>
          </Item>
          <Item className="gridItem" sx={{ boxShadow: 'none', color: '#000080' }}>
            <CardMedia component="img" height="200" image={lawn_mowing} alt="lawn_mowing" />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto" align="center">
                Стрижка газонов
              </Typography>
            </CardContent>
          </Item>
          <Item className="gridItem" sx={{ boxShadow: 'none', color: '#000080' }}>
            <CardMedia component="img" height="200" image={snow_removal} alt="snow_removal" />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto" align="center">
                Уборка снега
              </Typography>
            </CardContent>
          </Item>
          <Item className="gridItem" sx={{ boxShadow: 'none', color: '#000080' }}>
            <CardMedia
              component="img"
              height="200"
              image={cleaning_of_large_rooms}
              alt="cleaning_of_large_rooms"
            />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto" align="center">
                Уборка помещений большой площади
              </Typography>
            </CardContent>
          </Item>
          <Item className="gridItem" sx={{ boxShadow: 'none', color: '#000080' }}>
            <CardMedia
              component="img"
              height="200"
              image={cleaning_of_adjacent_territories}
              alt="cleaning_of_adjacent_territories"
            />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto" align="center">
                Уборка прилегающих территорий
              </Typography>
            </CardContent>
          </Item>
          <Item className="gridItem" sx={{ boxShadow: 'none', color: '#000080' }}>
            {' '}
            <CardMedia
              component="img"
              height="200"
              image={window_washing}
              alt="cleaning_of_adjacent_territories"
            />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto" align="center">
                Мытье окон и витражей
              </Typography>
            </CardContent>
          </Item>
          <Item className="gridItem" sx={{ boxShadow: 'none', color: '#000080' }}>
            <CardMedia
              component="img"
              height="200"
              image={carpet_cleaning}
              alt="cleaning_of_adjacent_territories"
            />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto" align="center">
                Чистка ковров
              </Typography>
            </CardContent>
          </Item>
        </div>
      </Box>
    </>
  );
}
