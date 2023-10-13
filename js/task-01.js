const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(categoriesList)

const numberOfCategories = categoryItems.length;
console.log('Number of categories:', numberOfCategories);

categoryItems.forEach((categoryItem) => {
    const categoryName = categoryItem.querySelector('h2').textContent;
    const elementsCount = categoryItem.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
  });