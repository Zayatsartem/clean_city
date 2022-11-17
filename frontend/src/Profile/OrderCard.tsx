import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Comment } from '../types/commentTypes';

export default function OrderCard({ order }: { order: Comment }): JSX.Element {
  const navigate = useNavigate();
  function leaveComment(): void {
    navigate(`/profile/comment/${order.id}`);
  }
  return (
    <Card sx={{ width: 350, margin: 3, height: 310 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {order.address}
        </Typography>
        <Typography sx={{ mb: 1 }} color="text.secondary">
          {order.date}
        </Typography>
        <Typography variant="body2">
          {order.time}
          <br />
          Комнат: {order.rooms}
          <br />
          Санузлов: {order.bathrooms}
          <br />
          Дополнительные услуги: {order.services}
          <br />
          <br />
          Цена: {order.price}
          <br />
          Статус: {order.status}
        </Typography>
      </CardContent>
      <CardActions>
        {order.status === 'completed' && (
          <button type="button" className="orderCard-btn" onClick={leaveComment}>
            Оставить комментарий
          </button>
        )}
      </CardActions>
    </Card>
  );
}
