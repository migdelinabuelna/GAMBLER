
//Created an array of images with index 0-2

const slotImages =[
    "imgs/star.png",
    "imgs/flower.png",
    "imgs/heart.png",
]

// create a function that allows you to spin images randomly 

function getRandomImages(){ //generating a random number between 0 and 2 // also the index 0-2 
    const randomSpin = Math.floor(Math.random() *3) 
    return slotImages[randomSpin]
}
//  console.log(getRandomImages()); //<not necessary but helps you check your work


// //add an event listener for when the bet button is clicked 

const button = document.getElementById('betting');
button.addEventListener('click', playSlotMachine);


function playSlotMachine() {
// we are selecting the photos id and assigning it to the picture element
const picture = document.querySelector('#photos') 
picture.innerHTML = "" //this is clearing out the main tag of all the image tags so that evey time you click the images reset 
const star = document.createElement('img')
star.id = 'star'
star.src = getRandomImages(); //<-we are calling the get random images function - use () when calling a functio
document.getElementById('photos').appendChild(star)


const flower =  document.createElement('img')
flower.id = 'flower'
flower.src = getRandomImages(); //We are assigning the flower value // <-calling the funciton
document.getElementById('photos').appendChild(flower)


const heart = document.createElement('img') //-> creating an img element that will go inside the <main> tag
//give the element an id
heart.id = 'flower' 
heart.src = getRandomImages(); // assign image- call the function for random img 
document.getElementById('photos').appendChild(heart)// now select main tag by id name and assign the heart element to it 


}

// add another event listener for maybe money emoji instead of a 

// let balance; 
// // STATE/DATA 
// we need to remember the player balance as the game is played 


// function inIt (){
//     
// balance = {
//     player: 0  
// }



//each bet will be $5 dollars - write a function that deducts
// $5 with each bet <--perhaps

//write a function that if the player matches three items they win
// &&&& add a certain ammount to the balance 
// &&& play the money sound in our files 



//RENDER
// we will be using the render function to update the data as the player bets


// THE DOM (DOCUMENT OBJECT MODEL)
// // the dom will allow us to update the HTML visually as we play the game
// we will do so using CSS withing JS
