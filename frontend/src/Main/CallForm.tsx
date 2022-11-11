import React, { ChangeEvent } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './CallForm.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CallForm(): JSX.Element {
  const [rooms, setRooms] = React.useState('');
  const [bathrooms, setBathrooms] = React.useState('');
  const [phone, setPhone] = React.useState('+7');
  const handleRooms = (event: SelectChangeEvent): void => {
    setRooms(event.target.value);
  };
  const handleBathrooms = (event: SelectChangeEvent): void => {
    setBathrooms(event.target.value);
  };
  const handlePhone = (event:ChangeEvent<HTMLTextAreaElement>): void => {
    setPhone(event.target.value);
  };
  // const send = (event: React.MouseEvent<HTMLElement>): void => {
  //   //setPhone(event.target.value);
  // };
  return (
    <>
    <h2>Рассчитать стоимость уборки </h2>
    <div className="CallForm">
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Количество комнат</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={rooms}
          label="Rooms"
          onChange={handleRooms}
        >
          <MenuItem value="1-комнатная">1-комнатная</MenuItem>
          <MenuItem value="2-комнатная">2-комнатная</MenuItem>
          <MenuItem value="3-комнатная">3-комнатная</MenuItem>
          <MenuItem value="4-комнатная">4-комнатная</MenuItem>
          <MenuItem value="5-комнатная">5-комнатная</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 210 }}>
        <InputLabel id="demo-simple-select-helper-label">Количество санузлов</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={bathrooms}
          onChange={handleBathrooms}
          label="Bathrooms"
        >
          <MenuItem value="1 санузел">1 санузел</MenuItem>
          <MenuItem value="2 санузла">2 санузла</MenuItem>
          <MenuItem value="3 санузла">3 санузла</MenuItem>
          <MenuItem value="4 санузла">4 санузла</MenuItem>
          <MenuItem value="5 санузлов">5 санузлов</MenuItem>
        </Select>
      </FormControl>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Телефон"
            multiline
            maxRows={4}
            value={phone}
            onChange={handlePhone}
          />
        </div>
      </Box>
      <Button type="submit" variant="contained">Рассчитать стоимость</Button>
    </div>
    </>
  );
}

export default CallForm;
