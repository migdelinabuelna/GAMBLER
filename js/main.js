


// Create array. The indexes: 0= skull.png. 1= flower.png, 2= heart.png
const slotImages = [ 
    "imgs/skull.png",
    "imgs/flower.png",
    "imgs/heart.png",
]


// create a function that allows you to spin images randomly 
function getRandomImages(){ 
    const randomSpin = Math.floor(Math.random() *3) // this will generate one of three numbers: 0, 1, or 2 
    return slotImages[randomSpin] // returns the image/index in slotImages that matches the randomSpin number.
}



// Runs function playSlotMachine when 'button' is clicked.
const button = document.getElementById('betting');//asigning new variable  
button.addEventListener('click', playSlotMachine);


let display = { 
    a: "",
    b: "",
    c: ""
}



function playSlotMachine() {

// const picture = document.querySelector('#photos') 
// picture.innerHTML = "" // empty string to clear out the main tag of all the image tags so that evey time you click the images reset 

document.getElementById('photos').innerHTML = "" // this resets the main tag of all it's elements as the function starts


const firstslot = document.createElement('img')
display.a = getRandomImages(); //<-we are calling the get random images function - use () when calling a functio
firstslot.src = display.a //changing the source of the image tag 
document.getElementById('photos').appendChild(firstslot) 


const secondslot =  document.createElement('img')
display.b = getRandomImages();
secondslot.src = display.b
document.getElementById('photos').appendChild(secondslot)


const thirdslot = document.createElement('img') //-> creating an img element that will go inside the <main> tag 
display.c = getRandomImages(); // assign image- call the function for random img 
thirdslot.src = display.c
document.getElementById('photos').appendChild(thirdslot)// now select main tag by id name and assign the heart element to it 

displayMessage() //--> this is calling on the next function to run 

}


function displayMessage() {
     
  if (display.a === display.b && display.b === display.c) { 
    document.getElementById('message').innerHTML = ('$$$ Win Win Win $$$'); //we are targetting the message id within the header tag to then display Win Win Win inside HTML
    document.getElementById('beat').play(); //<this is identifying your audio tag in HTML with the beat id and is is instructing to play the audio if condition it met
} else  { 
    document.getElementById('message').innerHTML = ('Sorry! Try Again');
    document.getElementById('lost').play();
 } 

 }

   


  


 




