let tabela = document.querySelector('.tabela');
let linhas=document.querySelectorAll('tr.linha');
let elementos = document.querySelectorAll('#element');
let change = document.querySelector('.change');
let nameElement = document.querySelector('h5#nameElement');
let info = document.querySelector('span#info');
tabela.addEventListener('mouseover', function(evento){
  var celula = evento.target;
  if (celula.id=="grupos") {
      for (var i = 0; i < elementos.length; i++) {
        if(elementos[i].className===celula.className){
          elementos[i].style.border="solid white 4px";
          elementos[i].style.textDecoration = "underline";
          elementos[i].style.fontSize = "11px";
        }else{
          elementos[i].style.opacity= "0.5";
        }
      }
  }
  if(celula.id=="camada"){
    for (var i = 0; i < elementos.length; i++) {
      if(elementos[i].headers===celula.headers){
        elementos[i].style.border="solid white 4px";
        elementos[i].style.textDecoration = "underline";
        elementos[i].style.fontSize = "11px";
      }else{
        elementos[i].style.opacity= "0.5";
      }
    }

  }
  if(celula.id=="element"){
    info.innerText = celula.textContent;
  }
});
tabela.addEventListener('mouseout', function(evento){
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.border="";
    elementos[i].style.textDecoration = "";
    elementos[i].style.opacity= "";
    elementos[i].style.fontSize = "";
  }
});

let iframe = document.querySelector('iframe');
tabela.addEventListener('click', function(evento){
  var celula = evento.target;
  if (celula.tagName=='TD'){
    var name = celula.title;
  }else{
    var name = celula.parentNode.title;
  }
  var url = "https://pt.wikipedia.org/wiki/"+name;
  iframe.src = url;

});
