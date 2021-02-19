
 document.getElementById('pressMe').addEventListener('click', press)



const left = document.createElement('img')
const middle = document.createElement('img')
const right = document.createElement('img')

document.getElementById('slotLeft').appendChild(left)
document.getElementById('slotMid').appendChild(middle)
document.getElementById('slotRight').appendChild(right)

left.src = 'elmos.jpg'
middle.src = 'hmm.jpg'
right.src = 'op.jpg'


// worked with Tamika

function press(){
  const randomNum = Math.random()
  const randomNum2 = Math.random()
  const randomNum3 = Math.random()
  const matchWin = randomNum == randomNum2 && randomNum == randomNum3
//left slot
  if(randomNum < .2){
      left.src = 'elmos.jpg'
    } else if(randomNum < .5 ){
        left.src = 'hmm.jpg'
} else if(randomNum < .7){
    left.src = 'op.jpg'
} else if(randomNum < .4){
  left.src = 'snoop.jpg'
} else{
  left.src = 'questions.jpg'
}
// middle
if(randomNum2 < .5){
  middle.src = 'hmm.jpg'
} else if(randomNum2 < .2){
  middle.src = 'op.jpg'
} else if(randomNum2 < .7){
  middle.src = 'snoop.jpg'
} else if (randomNum2 < .8){
  middle.src = 'questions.jpg'
}else {
  middle.src = 'elmos.jpg'
}
// right
if(randomNum3 <.8){
  right.src = 'op.jpg'
} else if(randomNum3 < .7){
  right.src = 'elmos.jpg'
} else if (randomNum3 < .5){
  right.src = 'questions.jpg'
} else if(randomNum3 <.2){
  right.src = 'snoop.jpg'
} else{
  right.src = 'hmm.jpg'
}
  }

  if (matchWin){
    document.querySelector('.message').innerText = "Nice! They all match"
  }
