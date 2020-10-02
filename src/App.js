import React from 'react';
import Recipe from "./Recipe";
import './App.css';

const recipe = {
  title: "Veg Pulao",
  subTitle: "Oct 02, 2020",
  imageUrl: "https://yummytummyrecipes.com/wp-content/uploads/2020/07/Veg-Pulav.png",
  user: "https://i.pinimg.com/originals/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.png",
  description: "Pulao is a one pot rice dish made by cooking fragrant basmati rice with aromatic spices, herbs and sometimes stock."
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Recipe recipe={recipe} />
      </header>
    </div>
  );
}

export default App;
