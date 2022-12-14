import React, { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './CallForm.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { requestTelegram, resetError } from './mainSlice';
import { getMessage } from './selectors';
import PhoneInput from './PhoneInput';

function CallForm(): JSX.Element {
  const message = useSelector(getMessage);
  const dispatch = useAppDispatch();
  const [rooms, setRooms] = React.useState('');
  const [bathrooms, setBathrooms] = React.useState('');
  const [phone, setPhone] = React.useState('+7');
  const handleRooms = (event: SelectChangeEvent): void => {
    setRooms(event.target.value);
  };
  const handleBathrooms = (event: SelectChangeEvent): void => {
    setBathrooms(event.target.value);
  };

  const handleRequest = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(requestTelegram({ rooms, bathrooms, phone }));
  };

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(resetError());
    }, 5000);
    return () => clearTimeout(id);
  }, [message, dispatch]);

  return (
    <form className="formsCallForm" onSubmit={handleRequest}>
      <h2 className="componentHeader">Рассчитать стоимость уборки</h2>
      <div className="CallForms">
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
            name="bathrooms"
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
          component="span"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <PhoneInput phone={phone} setPhone={setPhone} />
        </Box>
        <Button type="submit" className="callFormButton" variant="contained">
          Рассчитать стоимость
        </Button>
      </div>
      <div className="errDiv">{message}</div>
    </form>
  );
}

export default CallForm;
