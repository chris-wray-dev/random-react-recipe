import React from 'react';

class IngredientsAdder extends React.Component {
  state = {
    ingredients: []
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { addIngredients } = this.props;
    const ingredients = [...event.target].map(ingredient => {
      return ingredient.value;
    });
    ingredients.pop();
    addIngredients(ingredients);
  }

  render() {
    return(
      <form action="" onSubmit={ this.handleSubmit }>
        <label htmlFor="ingredient1">Ingredient 1 : 
          <input id="ingredient1" type="text"/>
        </label>
        <label htmlFor="ingredient2">Ingredient 2 :
          <input id="ingredient2" type="text"/>
        </label>
        <label htmlFor="ingredient3">Ingredient 3 :
          <input id="ingredient3" type="text"/>
        </label>
        <label htmlFor="ingredient4">Ingredient 4 :
          <input id="ingredient4" type="text"/>
        </label>
        <label htmlFor="ingredient5">Ingredient 5 :
          <input id="ingredient5" type="text"/>
        </label>
        <button type="submit">Generate Recipe!</button>
      </form>
    )
  }
}

export default IngredientsAdder;