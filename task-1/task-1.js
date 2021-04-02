const newEl = document.querySelector('ul');
const newElItems = newEl.querySelectorAll('.item')
console.log(`В списке ${newElItems.length} категории.`)

newElItems.forEach(item => {
    console.log(
        `Категория: ${item.querySelector('h2').textContent}
Количество элементов: ${item.querySelectorAll('li').length}`)
});