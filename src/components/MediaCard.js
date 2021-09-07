import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 200,
    height: "auto",
    display: "inline",
    margin: "12px auto"
  },
  media: {
    height: "auto"
  },
  price: {
    paddingTop: 8,
    textAlign: 'right'
  }
});

export default function MediaCard({ product }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          src={product.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textPrimary"
            component="p" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h4" color="textPrimary"
            component="p" className={classes.price}>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}