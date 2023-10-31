const Subtract: HTMLElement | null = document.getElementById('Subtract');
const Add: HTMLElement | null = document.getElementById('add');
const count: HTMLElement | null = document.getElementById('span');
Add.addEventListener('click', () => {
  let x = Number(count.innerText);
  x++;
  count.innerHTML = x + '';
  console.log(x);
});

Subtract.addEventListener('click', () => {
  let x = Number(count.innerText);
  x--;
  count.innerHTML = x + '';
  console.log(x);
});
