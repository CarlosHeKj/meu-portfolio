AOS.init()
const escrever = document.getElementById("Escrever");


  
setTimeout(() => {
    function typeWrite(elemento){
        escrever.style.display = "block"
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = ' ';
      textoArray.forEach(function(letra, i){   
        
      setTimeout(function(){
          elemento.innerHTML += letra;
      }, 100 * i)
  
    });
  }
  typeWrite(escrever);
  }, 1000);



