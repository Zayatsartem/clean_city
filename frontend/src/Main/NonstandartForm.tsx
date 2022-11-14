import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import React from 'react';
import './nonstandart.scss';

function NonstandartForm(): JSX.Element {
  const [phone, setPhone] = React.useState('+7');
  const [text, setText] = React.useState('');
  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value);
  };
  const handlePhone = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setPhone(event.target.value);
  };
  return (
    <>
      <h3>Нестандартная ситуация </h3>
      <p>Если Вам нужна уборка частного дома, коммерческих помещений большой площади, химчистка
        мебели, уборка территории(стрижка газона,уборка снега и др.), мойка витражного остекления
        и окон на высоте и др.
      </p>
      <p>Просто оставьте заявку и наш менеджер свяжется с Вами в ближайшее время для уточнения
        деталей и оформления заказа.
      </p>
      <div className="NonstandartForm">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '700px' },
          }}
          noValidate
          autoComplete="off"
        >
            <TextField
              id="outlined-multiline-flexible"
              minRows={3}
              multiline
              placeholder="Опишите заявку здесь"
              style={{ width: 700 }}
              value={text}
              onChange={handleText}
            />
        </Box>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25' },
          }}
          noValidate
          autoComplete="off"
        >
            <TextField
              id="outlined-multiline-flexible"
              label="Телефон"
              multiline
              maxRows={4}
              value={phone}
              onChange={handlePhone}
            />
        </Box>
        <Button type="submit" variant="contained">Оставить заявку</Button>
      </div>
    </>
  );
}

export default NonstandartForm;
