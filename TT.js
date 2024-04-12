//fetching the API
const baseUrl = 'http://localhost:3000/stock';
//linking javascript with html
document.addEventListener('DOMContentLoaded', () => {
    fetchStock()
})

function fetchStock(){
    fetch(`${baseUrl}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application.json',
        },
    })
      .then((res) => res.json())
      .then((stock) => {
    stock.forEach((stock) => displayStock(stock))
      })
      .catch((err) => console.log(err));
    }
function displayStock(stock){
    const stockContainer = document.querySelector('#stock')
    const parentDiv = document.createElement('div')
    parentDiv.classList.add('card')

}
//iteration through the cards
const image = document.createElement('img')
image.classList.add('card1')
image.src = stock.image_url
image.alt = stock.category

//appending the image to parentDiv
parentDiv.appendChild('image');

//appending each card to stock container
stockContainer.appendChild(parentDiv);

