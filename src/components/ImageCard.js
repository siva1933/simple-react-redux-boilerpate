import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Favorite from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteImg from '../assets/Icons/feather-heart.png';
import Clock from '../assets/Icons/feather-clock.png';
import FavoriteImgColor from '../assets/Icons/feather-heart-color.png';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImageCard({ data, idx }) {
  const { id, name, image, category, label, price, description } = data
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <div className="d-flex space-between">
              <div>
                <div>{name}</div>
                <div><img src={Clock} /> <span className="fs-14">14 mins</span></div>
              </div>
              <div>
                {idx % 3 === 2 ? <img src={FavoriteImgColor} /> : <img src={FavoriteImg} />}
              </div>
            </div>
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          View More
        </Button>
        <Button size="small">
          Quick View
        </Button>
      </CardActions>
    </Card>
  );
}
