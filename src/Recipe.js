import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, IconButton, Avatar, CardActions, Typography, CardMedia, CardContent } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  
function Recipe(props) {
    const classes = useStyles()
    
    return (
    <div className="Recipe">
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.recipe.title}
        subheader={props.recipe.subTitle}
      />
      <CardMedia
        className={classes.media}
        image={props.recipe.imageUrl}
        title={props.recipe.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        { props.recipe.description }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      </Card>
    </div>
  );
}

export default Recipe;
