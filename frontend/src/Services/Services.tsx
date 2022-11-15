import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 1 }}>
        <Grid xs={3}>
          <Item sx={{ maxWidth: 500 }}>
            {/* <Card sx={{ maxWidth: 500 }}> */}
            <CardMedia component="img" height="140" image={wet_cleaning} alt="wet_cleaning" />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto">
                Влажная уборка квартир и домов
              </Typography>
            </CardContent>
            {/* </Card> */}
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              height="140"
              image={furniture_dry_cleaning}
              alt="furniture_dry_cleaning"
            />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto">
                Xимчистка мебели
              </Typography>
            </CardContent>
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item sx={{ maxWidth: 500 }}>
            <CardMedia component="img" height="140" image={lawn_mowing} alt="lawn_mowing" />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto">
                Стрижка газонов
              </Typography>
            </CardContent>
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item sx={{ maxWidth: 500 }}>
            <CardMedia component="img" height="140" image={snow_removal} alt="snow_removal" />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto">
                Уборка снега
              </Typography>
            </CardContent>
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="140"
              image={cleaning_of_large_rooms}
              alt="cleaning_of_large_rooms"
            />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto">
                Уборка помещений большой площади
              </Typography>
            </CardContent>
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              height="140"
              image={cleaning_of_adjacent_territories}
              alt="cleaning_of_adjacent_territories"
            />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto">
                Уборка прилегающих территорий
              </Typography>
            </CardContent>
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item sx={{ maxWidth: 500 }}>
            {' '}
            <CardMedia
              component="img"
              height="140"
              image={window_washing}
              alt="cleaning_of_adjacent_territories"
            />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto">
                Мытье окон и витражей
              </Typography>
            </CardContent>
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              height="140"
              image={carpet_cleaning}
              alt="cleaning_of_adjacent_territories"
            />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant="body1" component="div" margin="auto">
                Чистка ковров
              </Typography>
            </CardContent>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
