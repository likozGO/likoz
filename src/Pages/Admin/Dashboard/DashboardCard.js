import React from 'react';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    textAlign: 'center',
  },
  img: {
    objectFit: 'contain',
  },
});

export default function DashboardCard(props) {
  const classes = useStyles();
  const { cardTitle, cardPhoto, cardText } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          alt={cardTitle}
          image={cardPhoto}
          title={cardTitle}
          className={classes.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
