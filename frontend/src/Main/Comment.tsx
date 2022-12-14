import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { TComment } from '../types/AdminTypes';

function Comment({ comment }: { comment: TComment }): JSX.Element {
  return (
    <Card sx={{ width: 350, mb: 2 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Отзыв
        </Typography>
        <Typography variant="h5" component="div">
          ⭐⭐⭐⭐⭐
        </Typography>
        <Typography variant="body2">{comment.name}</Typography>
        <Typography variant="body2">{comment.title}</Typography>
        <Typography variant="body2">{comment.date}</Typography>
      </CardContent>
    </Card>
  );
}

export default Comment;
