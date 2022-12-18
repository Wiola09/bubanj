var a = 0;
function klikno(ddd) {
  /* alert("des ba"); */
  /*  var audio = new Audio('sounds/tom-1.mp3');   /* !!! Kosa crta treba da bude /   , a ne \ */
  /* audio.play(); */
  /*  console.log(this.innerHTML); */
  /*  this.style.color = "white"; */
  switch (ddd) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kik = new Audio("sounds/kick-bass.mp3");
      kik.play();
      break;
    default:
      break;
  }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    klikno(this.innerHTML);
    dugmeAnimacija(this.innerHTML);
  });
  a++;
}

document.addEventListener("keydown", function (event) {
    /* console.log(event.key); */
    klikno(event.key);
    dugmeAnimacija(event.key);
});

function dugmeAnimacija(ddd) {
    var text = "."+ ddd;
    var aktivnoDugme = document.querySelector(text);
   /*  console.log(text)
    console.log(aktivnoDugme) */
    aktivnoDugme.classList.add("pressed");
    setTimeout(function () {
        aktivnoDugme.classList.remove("pressed");
        
    }, 100);
}