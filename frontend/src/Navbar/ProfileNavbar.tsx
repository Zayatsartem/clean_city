import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
 useNavigate
} from 'react-router-dom';

import './styles.css';

export default function BasicSelect(): JSX.Element {
  const [page] = React.useState('');

  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent):void => {
    if (event.target.value === 'orders') {
      navigate('/profile/orders');
    }
    if (event.target.value === 'edit') {
      navigate('/profile/edit');
    }
  };

  return (
    <Box sx={{ height: 60, minWidth: 100, color: 'white' }}>
      <FormControl fullWidth>
        <InputLabel style={{ color: 'white' }} id="demo-simple-select-label">Профиль</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={page}
          label="Age"
          onChange={handleChange}
        >

          <MenuItem value="orders">
            {/* <Route path="/profile/orders" /> */}
            Мои заказы
          </MenuItem>
          <MenuItem value="edit">
          {/* <Route path="/profile/edit" element={<EditProfile />} /> */}
          Изменить профиль
          </MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}
