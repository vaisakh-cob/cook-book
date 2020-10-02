import React from 'react';
import RecipeList from "./RecipeList";
import { makeStyles } from '@material-ui/core/styles';
import _ from "underscore";

import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useCollectionData, firestore } from "./Firebase"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eaeded",
    minHeight: "100vh",
    overflow: "hidden",
    textAlign: "center"
  },
  navbar: {
    backgroundColor: "#282c34"
  },
  appBar: {
    backgroundColor: "inherit",
    marginBottom: "1%"
  },
  content: {
    overflowY: "auto",
    overflowX: "hidden"
  },
  subRoot: {
    marginBottom: "1%"
  },
  title: {
    textAlign: "left",
    left: "2.5%",
    margin: 0,
    position: "relative"
  },
  header: {
    display: "flex",
  }
}));

function App() {
  const classes = useStyles();
  const recipes = firestore.collection(process.env.REACT_APP_FIRESTORE_COLLECTION_NAME);
  const query = recipes.orderBy('createdAt');

  let [ recipeList ] = useCollectionData(query);
  const recipeTypes = [];
  const recipeGroupList = _.groupBy(recipeList, recipe => recipe.recipeType);

  for (const recipesType in recipeGroupList) {
    recipeTypes.push(
    <div key={ recipesType } className={classes.subRoot}>
      <h1 className={classes.title}>{ recipesType }</h1>
        <header className={classes.header}>
        { recipeGroupList && <RecipeList recipeList={ recipeGroupList[recipesType] } /> }
        </header>
      </div>
    )
  }

  return (
    <div className={classes.root}>
    <div className={classes.navbar}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Cook Book
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
      <div className={classes.content}>
        { recipeTypes }
      </div>
    </div>
  );
}

export default App;
