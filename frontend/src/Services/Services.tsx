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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Services(): JSX.Element {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 1 }}>
        <Grid xs={4}>
          <Item>
            <CardMedia component="img" height="140" image={wet_cleaning} alt="wet_cleaning" />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                Влажная уборка квартир и домов
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Описание:
              </Typography>
            </CardContent>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <CardMedia
              component="img"
              height="140"
              image={furniture_dry_cleaning}
              alt="furniture_dry_cleaning"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                Xимчистка мебели
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Описание:
              </Typography>
            </CardContent>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <CardMedia component="img" height="140" image={lawn_mowing} alt="lawn_mowing" />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                Стрижка газонов
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Описание:
              </Typography>
            </CardContent>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            {' '}
            <CardMedia component="img" height="140" image={snow_removal} alt="snow_removal" />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                Уборка снега
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Описание:
              </Typography>
            </CardContent>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            {' '}
            <CardMedia
              component="img"
              height="140"
              image={cleaning_of_large_rooms}
              alt="cleaning_of_large_rooms"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                Уборка помещений большой площади
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Описание:
              </Typography>
            </CardContent>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            {' '}
            <CardMedia
              component="img"
              height="140"
              image={cleaning_of_adjacent_territories}
              alt="cleaning_of_adjacent_territories"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                Уборка прилегающих территорий
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Описание:
              </Typography>
            </CardContent>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
