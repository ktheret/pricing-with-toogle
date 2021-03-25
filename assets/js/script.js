//If you click on the cursor

let cursor = document.querySelector('.slider');
let cards = document.querySelector('.cards');

cursor.addEventListener('click', () => {
   cursor.classList.toggle('show-monthly');
   cards.classList.toggle('show-monthly');
});

//If you click on the words
let annual = document.querySelector('.annual');
let month = document.querySelector('.month');

annual.addEventListener('click', () => {
   if (cursor.classList.contains('show-monthly')) {
      cursor.classList.remove('show-monthly');
      cards.classList.remove('show-monthly');
   }
});

month.addEventListener('click', () => {
   if (!cursor.classList.contains('show-monthly')) {
      cursor.classList.add('show-monthly');
      cards.classList.add('show-monthly');
   }
});
