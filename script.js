const mensagem = document.getElementById("Escrever");
const botao_cima = document.getElementById("seta_cima");
const botao_baixo = document.getElementById("link_seta_baixo");
const div_seta_baixo = document.getElementById("div_seta_baixo");
let count = 1;
window.addEventListener("scroll", function(event)  {
  if(this.window.scrollY == 0){
    count = 1;
    div_seta_baixo.classList.remove("hidden");
    botao_cima.classList.remove("visible");
    botao_baixo.style.cssText = 'cursor:pointer;';
  }
  else{
    botao_cima.classList.add("visible");
  }
})

function rolar(){
 
  count ++;
  let index = "index.html#" + count;
  botao_baixo.href = index;
  
  if(count < 4){
    
    div_seta_baixo.classList.remove("hidden");
    botao_baixo.style.cssText = 'cursor:pointer;';
  }
  else{
    div_seta_baixo.classList.add("hidden");
    botao_baixo.style.cssText = 'cursor:default;';
  }
  

}
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 100 * i)

  });
}
typeWrite(mensagem);