import React from 'react';
import './App.css';
import IngredientsAdder from './components/IngredientsAdder';
import RecipeGenerator from './components/RecipeGenerator';

class App extends React.Component {
  state = {
    ingredients: [],
    showRecipe: false
  }

  addIngredients = (ingredients) => {
    this.setState({ ingredients });
    this.setState({ showRecipe: true });
  }

  render() {
    return (
      <>
      <h1>Random Recipe Generator</h1>
      <IngredientsAdder addIngredients={ this.addIngredients }/>
      { this.state.showRecipe ? 
      <RecipeGenerator ingredients={ this.state.ingredients } />
      : null }
      </>
    );
  }
}

export default App;
