consoleText(['Programador!', 'Designer Web!', 'Freelancer!'], 'text',['#f7d708','#FF5393','#26f288']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
}


let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 680 < scrollTop){
            animado[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', mostrarScroll);



const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav__ul");

navToggle.addEventListener("click", ()=> {
    navMenu.classList.toggle("nav__visible");

    if(navMenu.classList.contains("nav__visible")) {
      navToggle.setAttribute("arial-label", "Cerrar menú");
    } else{
      navToggle.setAttribute("arial-label", "Abrir menú");
    }
} );
