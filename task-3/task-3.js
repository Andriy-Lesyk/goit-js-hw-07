const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ]
  const newEl = document.querySelector('ul');
  const makeNewList = (({url, alt})=>{
  const newList = document.createElement('li')    
  const imgEl = document.createElement('img')
  imgEl.classList.add('img_item')

  const urlEl = document.createElement('url')
  urlEl.textContent = url

  const altEl = document.createElement('alt')
  altEl.textContent = alt
  
  newEl.insertAdjacentElement('beforeend',newList)
  newList.insertAdjacentElement('beforeend',imgEl)
  imgEl.insertAdjacentElement('beforeend', urlEl)
  imgEl.insertAdjacentElement('beforeend', altEl)
  });
 images.map(makeNewList);
 console.log(newEl)