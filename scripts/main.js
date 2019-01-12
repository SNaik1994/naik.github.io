var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Naik.jpg') {
      myImage.setAttribute ('src','images/Radz.jpg');
    } else {
      myImage.setAttribute ('src','images/Naik.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'My Portfolio is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'My Portfolio is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
