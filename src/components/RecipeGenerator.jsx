import React from 'react';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
 }

const RecipeGenerator = ({ ingredients }) => {
  const shuffledIngredients = shuffle(ingredients);
  const recipeNumber = Math.floor(Math.random() * 3);
  return (
    <ol>
      { recipeNumber === 0 ?
      <>
        <p>recipe 1</p>
        <li>Take the { shuffledIngredients[0] } chop finely and poach over a low heat</li>
        <li>Beat together vigorously with { shuffledIngredients[1] }</li>
        <li>Pass { shuffledIngredients[2] } through a food processor</li>
        <li>Roll the { shuffledIngredients[0] } and { shuffledIngredients[1] } mixture around in the { shuffledIngredients[2] } crumbs</li>
        <li>Deep fry the balls in peanut oil</li>
        <li>Drizzle with a { shuffledIngredients[3] } reduction</li>
        <li>Sprinkle with { shuffledIngredients[4] }</li>
        <li>Serve on a chilled white platter</li> 
      </>
      : null }

      { recipeNumber === 1 ?
      <>
        <p>recipe 2</p>
        <li>Take the { shuffledIngredients[0] } chop finely and poach over a low heat</li>
        <li>Beat together vigorously with { shuffledIngredients[1] }</li>
        <li>Pass { shuffledIngredients[2] } through a food processor</li>
        <li>Roll the { shuffledIngredients[0] } and { shuffledIngredients[1] } mixture around in the { shuffledIngredients[2] } crumbs</li>
        <li>Deep fry the balls in peanut oil</li>
        <li>Drizzle with a { shuffledIngredients[3] } reduction</li>
        <li>Sprinkle with { shuffledIngredients[4] }</li>
        <li>Serve on a chilled white platter</li> 
      </>
      : null }

      { recipeNumber === 2 ?
      <>
        <p>recipe 3</p>
        <li>Take the { shuffledIngredients[0] } chop finely and poach over a low heat</li>
        <li>Beat together vigorously with { shuffledIngredients[1] }</li>
        <li>Pass { shuffledIngredients[2] } through a food processor</li>
        <li>Roll the { shuffledIngredients[0] } and { shuffledIngredients[1] } mixture around in the { shuffledIngredients[2] } crumbs</li>
        <li>Deep fry the balls in peanut oil</li>
        <li>Drizzle with a { shuffledIngredients[3] } reduction</li>
        <li>Sprinkle with { shuffledIngredients[4] }</li>
        <li>Serve on a chilled white platter</li> 
      </>
      : null }
      
    </ol>
  

// <ol>
// <li>Take the { shuffledIngredients[0] } chop finely and poach over a low heat</li>
// <li>Beat together vigorously with { shuffledIngredients[1] }</li>
// <li>Pass { shuffledIngredients[2] } through a food processor</li>
// <li>Roll the { shuffledIngredients[0] } and { shuffledIngredients[1] } mixture around in the { shuffledIngredients[2] } crumbs</li>
// <li>Deep fry the balls in peanut oil</li>
// <li>Drizzle with a { shuffledIngredients[3] } reduction</li>
// <li>Sprinkle with { shuffledIngredients[4] }</li>
// <li>Serve on a chilled white platter</li>
// </ol>
  )
}

export default RecipeGenerator;

/*
function shuffle(array) {
 var currentIndex = array.length, temporaryValue, randomIndex;
 while (0 !== currentIndex) {
   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex -= 1;
   temporaryValue = array[currentIndex];
   array[currentIndex] = array[randomIndex];
   array[randomIndex] = temporaryValue;
 }
 return array;
}
*/