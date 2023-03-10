
const slotImages = [    //indexes: 0= skull.png. 1= flower.png, 2= heart.png
    "imgs/skull.png",
    "imgs/flower.png",
    "imgs/heart.png",
]


function getRandomImages(){ 
    const randomSpin = Math.floor(Math.random() *3)   // 0, 1, or 2 
    return slotImages[randomSpin]  // returns the randomSpin number  the image/index in slotImages that matches the randomSpin number.
}


const button = document.getElementById('betting');  
button.addEventListener('click', playSlotMachine);

let display = { 
    a: "",
    b: "",
    c: ""
}

function playSlotMachine() {

document.getElementById('photos').innerHTML = ""  // this resets the main tag of all it's elements as the function starts

const firstslot = document.createElement('img')
display.a = getRandomImages(); 
firstslot.src = display.a //changing the source of the image tag
document.getElementById('photos').appendChild(firstslot) 

const secondslot =  document.createElement('img')
display.b = getRandomImages(); 
secondslot.src = display.b 
document.getElementById('photos').appendChild(secondslot)

const thirdslot = document.createElement('img') 
display.c = getRandomImages(); 
thirdslot.src = display.c
document.getElementById('photos').appendChild(thirdslot)

displayMessage()  
}

function displayMessage() {

  if (display.a === display.b && display.b === display.c) { 
    
    document.getElementById('message').innerHTML = ('$$$ Win Win Win $$$');
    document.getElementById('beat').play();

} else  { 
    document.getElementById('message').innerHTML = ('Sorry! Try Again');
    document.getElementById('lost').play();
   
} 
 }
