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
      margin: "2.5%",
      marginLeft: 0,
      height: "fit-content"
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
    content: {
      textAlign: "left",
      maxHeight: "4rem",
      overflow: "auto",
      paddingTop: 0,
      paddingBottom: "0 !important",
      marginBottom: "1rem"
    }
  }));

  
function Recipe(props) {
    const classes = useStyles()
    
    return (
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={props.recipe.user}>
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.recipe.description}
        </Typography>
      </CardContent>
      </Card>
  );
}

export default Recipe;
