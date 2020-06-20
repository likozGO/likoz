import React from 'react';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    textAlign: 'center',
  },
  img: {
    objectFit: 'contain',
  },
  dashboardTitle: {
    textDecoration: 'underline',
  },
});

export default function DashboardCard(props) {
  const classes = useStyles();
  const {
    cardTitle, cardPhoto, cardText, cardLink,
  } = props;
  return (
    <Card className={classes.card} component={Link} to={cardLink}>
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
          <Typography gutterBottom variant="h5" component="h2" className={classes.dashboardTitle}>
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
