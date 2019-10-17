import React from 'react';

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
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
  const recipeNumber = Math.floor(Math.random() * 2);
  return (
    <ol>
      {recipeNumber === 0 ? (
        <>
          <li>
            Take the {shuffledIngredients[0]} chop finely and poach over a low
            heat
          </li>
          <li>Beat together vigorously with {shuffledIngredients[1]}</li>
          <li>Pass {shuffledIngredients[2]} through a food processor</li>
          <li>
            Roll the {shuffledIngredients[0]} and {shuffledIngredients[1]}{' '}
            mixture around in the {shuffledIngredients[2]} crumbs
          </li>
          <li>Deep fry the balls in peanut oil</li>
          <li>Drizzle with a {shuffledIngredients[3]} reduction</li>
          <li>Sprinkle with {shuffledIngredients[4]}</li>
          <li>Serve on a chilled white platter</li>
        </>
      ) : null}

      {recipeNumber === 1 ? (
        <>
          <li>Pound {shuffledIngredients[0]} in a pestle + mortar</li>
          <li>
            Whisk the pounded {shuffledIngredients[0]} together with finely
            diced {shuffledIngredients[1]}
          </li>
          <li>
            Spread evenly over a lined baking tray and bake at 220C for 8
            minutes
          </li>
          <li>
            While that's happening, defrost the {shuffledIngredients[2]}.
            Remember to wash your hands afterwards
          </li>
          <li>
            Roll the {shuffledIngredients[3]} between your thighs sensually
          </li>
          <li>
            Take the {shuffledIngredients[1]} + {shuffledIngredients[0]} mixture
            out of the oven and smash with a rolling pin in a teatowel
          </li>
          <li>
            Gently smoke the {shuffledIngredients[4]} and stir in the defrosted{' '}
            {shuffledIngredients[2]}
          </li>
          <li>
            Present all the elements of the dish on a slate tile with some
            microherbs
          </li>
        </>
      ) : null}
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
  );
};

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
