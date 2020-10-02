import React from 'react';
import RecipeList from "./RecipeList";
import './App.css';

import { useCollectionData, firestore } from "./Firebase"

function App() {
  const recipes = firestore.collection(process.env.REACT_APP_FIRESTORE_COLLECTION_NAME);
  const query = recipes.orderBy('createdAt');

  let [ recipeList ] = useCollectionData(query);

  console.log(recipeList)

  return (
    <div className="App">
      <header className="App-header">
      { recipeList && <RecipeList recipeList={recipeList} /> }
      </header>
    </div>
  );
}

export default App;
