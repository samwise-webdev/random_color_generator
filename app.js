const btn = document.querySelector('#changeBtn')
const h1 = document.querySelector('h1');
const div = document.querySelector('#colorCode')

function getRandomColor() {
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 255);    
   const b = Math.floor(Math.random() * 255);
        if (r < 100 && g < 100 && b < 100) {
        h1.style.color = 'white'
        }  else {
        h1.style.color = 'black'
        }
        return `rgb(${r}, ${g}, ${b})`
}


btn.addEventListener('click', function() {
    const newColor = getRandomColor();  //set function to a variable so the returned value of the function can be set to the new elements - can't set the function to the new elements to get the new value
    document.body.style.backgroundColor = newColor;
    div.innerText = `${newColor}`;
})

