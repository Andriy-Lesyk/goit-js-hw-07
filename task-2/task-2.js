const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const newEl = document.querySelector('ul')
const newAr = []
ingredients.forEach(ingredient=>{
const newEl1 = document.createElement('li') 
newEl1.textContent=ingredient 
console.log(newEl1)
newAr.push(newEl1)   
});
console.log(newAr)
newEl.append(...newAr)