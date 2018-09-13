'use strict';

var correctAnswers = 0;

var game = prompt('Lets play a game! Whats your name?');
console.log(game.toUpperCase());
var gameresponse = ' Awesome ' + game + ' lets start! ';
alert(gameresponse);



var born = prompt('Was I born in the states?');
console.log(born.toUpperCase());
var bornyes = 'Actually I was born in Venezuela';
var bornno = 'You are right I was born in Venezuela';

if (born.toUpperCase() === 'YES') {
  	alert(bornyes);
  } else { 
  	correctAnswers++;
  	alert(bornno); 
}


var music = prompt('Do I have music tattoos?');
console.log(music.toUpperCase());
var musicyes = 'Yes! I got them very late at night for no reason';
var musicno = 'I actually do, I have them on my left arm';

if (music.toUpperCase() === 'YES') {
	correctAnswers++;
  alert(musicyes);
} else { 
  alert(musicno); 
}


var running = prompt('Have I ever ran a ultramarathon?');
console.log(running.toUpperCase());
var runningyes = 'I did... Never again';
var runningno = 'Once, a long time ago, but like I said a long time ago..';

if (running.toUpperCase() === 'yes') {
	correctAnswers++;
  alert(runningyes);
} else { 
	alert(runningno);
}

var chess = prompt('Have I ever won a chess tournament?');
console.log(chess.toUpperCase());
var chessyes = 'To your suprised no I have not, but I would love to.';
var chessno = 'You are right, I started playing but never got too much into it.';

if (chess.toUpperCase() === 'YES') {
	correctAnswers++;
  alert(chessyes);
} else { 
  alert(chessno); 
}


var tries = 0;
var myFavoriteNumber = 3;
while (tries < 4) {
	var myFavoriteNumberAnswer = prompt('What is my favorite number?');
  tries = tries + 1;
  
  if(myFavoriteNumberAnswer < myFavoriteNumber){
  	alert('That guess is too low!');
  }else if (myFavoriteNumberAnswer > myFavoriteNumber) {
  	alert('that guess is too high!');
  }else{
  	correctAnswers++;
  	alert('That guess is correct! My favority number is ' + myFavoriteNumber);
    break;
  }

  }



  var favmusic = ['hip hop', 'country', 'electronic', 'house'];


  var tries = 0;
  while (tries < 6) {
    var fav = prompt('What is my favorite music?');
    tries = tries + 1;
    var correctAnswer = false;
    for(var i=0;i<favmusic.length;i++){
      if (fav === favmusic[i]) {
        correctAnswer = true;
        break;
      }
    }
    
    if(correctAnswer){
      correctAnswers++;
      alert('That is right! ' + favmusic.join(", ") + ' these are all my choices and you guessed right!');
      break;
    }
    
    alert('oops, that is wrong');
    
  
  }
alert(game + " you got " + correctAnswers + " correct answers out of 7! Thanks for playing! ");