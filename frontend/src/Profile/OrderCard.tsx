import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Order from '../types/OrderTypes';

export default function OrderCard({ order }: { order:Order }): JSX.Element {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {order.date}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {order.time}
        </Typography>
        <Typography variant="body2">
          {order.address}
          <br />
          Комнат: {order.rooms}
          <br />
          Санузлов: {order.bathrooms}
          <br />
          Статус: {order.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Оставить комментарий</Button>
      </CardActions>
    </Card>
  );
}
