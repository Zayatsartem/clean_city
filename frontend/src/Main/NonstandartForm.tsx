import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { freeRequestTelegram, resetError } from './mainSlice';
import './nonstandart.scss';
import PhoneInput from './PhoneInput';
import { getFreeFormMessage } from './selectors';

function NonstandartForm(): JSX.Element {
  const freeFormMessage = useSelector(getFreeFormMessage);
  const dispatch = useAppDispatch();
  const [phone, setPhone] = React.useState('+7');
  const [comment, setComment] = React.useState('');
  const handleComment = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setComment(event.target.value);
  };

  const handleFreeRequest = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(freeRequestTelegram({ phone, comment }));
  };

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(resetError());
    }, 5000);
    return () => clearTimeout(id);
  }, [freeFormMessage, dispatch]);

  return (
    <form className="NonstandartForm" onSubmit={handleFreeRequest}>
      <div className="nonstandart">
        <h2 className="componentHeader">Нестандартная ситуация </h2>
        <div className="textBox">
          <div className="nonstandart-p">
            Если Вам нужна уборка частного дома, коммерческих помещений большой площади, химчистка
            мебели, уборка территории (стрижка газона, уборка снега и др.), мойка витражного
            остекления и окон на высоте и т.д.
            <br />
            <br />
            Просто оставьте заявку и наш менеджер свяжется с Вами в ближайшее время для уточнения
            деталей и оформления заказа.
          </div>
        </div>
      </div>
      <Box
        component="span"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '700px' },
        }}
      >
        <TextField
          id="outlined-multiline-flexible"
          minRows={3}
          multiline
          placeholder="Опишите заявку здесь"
          style={{ width: 700 }}
          value={comment}
          onChange={handleComment}
        />
      </Box>
      <Box
        component="span"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25' },
        }}
      >
        <PhoneInput phone={phone} setPhone={setPhone} />
      </Box>
      <Button className="nonstandartButton" type="submit" variant="contained">
        Оставить заявку
      </Button>
      <div className="errDiv">{freeFormMessage}</div>
    </form>
  );
}

export default NonstandartForm;
