import Box from '@mui/material/Box';
import Container from '@mui/material/Container/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

function Footer(): JSX.Element {
  return (
    <Paper
      sx={{
        marginTop: '60px',
        width: '100%',
        position: 'inherit',
        bottom: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            my: 1
          }}
        />
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            mb: 2,
          }}
        >
          <Typography variant="caption" className="footerLinks">
            <Link className="links" type="button" to="/">
              Главная
            </Link>
            <Link className="links" to="/order">
              Сделать заказ
            </Link>
            <Link className="links" to="/login">
              Войти
            </Link>
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            ©2022, Чистый город
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default Footer;
