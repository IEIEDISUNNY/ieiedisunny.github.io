var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://drive.google.com/file/d/1fKUGnjlSUKzRXHm2mfoB9mjRGJzvjAb6/view?usp=sharing') {
      myImage.setAttribute ('src','https://drive.google.com/file/d/1pKa49jf6QRSr8kp3HhbybAHabQNbt-I3/view?usp=sharing');
    } else {
      myImage.setAttribute ('src','https://drive.google.com/file/d/1fKUGnjlSUKzRXHm2mfoB9mjRGJzvjAb6/view?usp=sharing');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
   let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Welcome, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}