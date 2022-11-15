import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { CardMedia } from '@mui/material';
import oneRooms from './oneRooms.jpg';
import three_bedroom from './three_bedroom.jpg';
import two_bedroom from './two_bedroom.jpg';

const tiers = [
  {
    title: 'Однокомнатная квартира',
    price: '1990',
    img: [oneRooms],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Двухкомнатная квартира',
    subheader: 'Популярный вариант',
    price: '2490',
    img: [two_bedroom],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Трехкомнатная квартира',
    price: '2990',
    img: [three_bedroom],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

function PricingContent(): JSX.Element {
  // const navigate = useNavigate();
  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography component="h5" variant="h5" align="center" color="text.primary" gutterBottom>
          Средняя стоимость уборки квартиры
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h6" color="text.primary">
                      от {tier.price} рублей
                    </Typography>
                  </Box>
                  <ul>
                    {tier.img.map((img) => (
                      <CardMedia key={img} component="img" height="140" image={img} alt="#" />
                    ))}
                  </ul>
                </CardContent>
                {/* <CardActions>
                  <Button fullWidth variant={tier.buttonVariant as 'outlined' | 'contained'}>
                    {tier.buttonText}
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default function Pricing(): JSX.Element {
  return <PricingContent />;
}
