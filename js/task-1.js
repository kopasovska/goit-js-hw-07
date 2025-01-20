const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`);
  const elements = category.querySelectorAll('li');
  console.log(`Elements: ${elements.length}`);
});
