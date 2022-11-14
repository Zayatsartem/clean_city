import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { TComment } from '../Admin/Adminslice';

function Comment({ comment }: { comment: TComment }): JSX.Element {
  return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Отзыв
          </Typography>
          <Typography variant="h5" component="div">
            ⭐⭐⭐⭐⭐
          </Typography>
          <Typography variant="body2">
            {comment.title}
          </Typography>
        </CardContent>
      </Card>

  );
}

export default Comment;
