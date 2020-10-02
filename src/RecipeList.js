import React from 'react';
import Recipe from "./Recipe";

function RecipeList(props) {
    const recipes = []

    for (const [index, foodRecipe] of props.recipeList.entries()) {
        recipes.push(<Recipe key={index} recipe={foodRecipe} />)
    }

    return (
    <div>
        {recipes}
    </div>
  );
}

export default RecipeList;
