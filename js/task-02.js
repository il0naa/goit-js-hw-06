const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');
console.log(ingredientsList)

const listElements = ingredients
.map(ingredient => {
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  listElement.classList.add('item');
  return listElement;
});

ingredientsList.append(...listElements);
