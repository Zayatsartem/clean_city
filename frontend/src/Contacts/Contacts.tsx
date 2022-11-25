import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { List, ListItem } from '@mui/material';

const theme = createTheme();

export default function Contacts(): JSX.Element {
  const state = {
    center: [59.929542, 30.340006],
    zoom: 15,
    width: 500,
  };
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 5,
            pb: 6,
          }}
        >
          <Container sx={{ width: '100%', alignItems: 'center' }}>
            <h2 className="average-price">Наши контакты в Санкт-Петербурге</h2>
            <List
              sx={{
                width: '100%',
                maxWidth: 500,
                bgcolor: 'background.paper',
                alignItems: 'center',
              }}
            >
              <ListItem>Email: cleancity@mail.ru</ListItem>
              <ListItem>Телефон: +7(812)652-37-95</ListItem>
              <ListItem>Название: ООО Чистый город</ListItem>
              <ListItem>Адрес: набережная реки Фонтанки 56</ListItem>
            </List>
            <YMaps>
              <Map state={state} width="100%" height="300px">
                <Placemark geometry={[59.929542, 30.340006]} />
              </Map>
            </YMaps>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
