import React from 'react';
import Recipe from "./Recipe";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "-webkit-inline-box",
        overflowX: "auto",
        width: "100%",
        margin: "0 2.5%"
    }
  }));

function RecipeList(props) {
    const classes = useStyles();
    const recipes = []

    for (const [index, foodRecipe] of props.recipeList.entries()) {
        recipes.push(<Recipe key={index} recipe={foodRecipe} />)
    }

    return (
    <div className={classes.root}>
        {recipes}
    </div>
  );
}

export default RecipeList;
