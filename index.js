
function playSound(){
    const hoverSound = new Audio('./sounds/hover.mp3');
    hoverSound.play();
}

function playTypeSound(){
    const typeSound = new Audio('./sounds/typing.mp3');
    typeSound.autoplay = "autoplay";
    setTimeout(() => {typeSound.play();}, 4000)
}



  mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

const anchors = document.getElementsByClassName("btns");
window.onload = playTypeSound;

for (let i=0; i<anchors.length; i++) {
    anchors[i].onmouseover = playSound;
}


