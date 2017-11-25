(function() {
  function buildQuiz() {
    const output = [];

    questoes.forEach((currentquestao, questaoNumber) => {
      const respostas = [];

      for (letter in currentquestao.respostas) {
        respostas.push(
          `<label>
            <input type="radio" name="questao${questaoNumber}" value="${letter}">
            ${letter} :
            ${currentquestao.respostas[letter]}
          </label>`
        );
      }

      output.push(
          `<div class="questao"> ${currentquestao.questao} </div>
          <div class="respostas"> ${respostas.join("")} </div>`
      );
    });

    quisjs.innerHTML = output.join("");
  }

  function mostrarResultado() {
    const respostas = quisjs.querySelectorAll(".respostas");
    let numCorrect = 0;

    questoes.forEach((currentquestao, questaoNumber) => {
      const resposta = respostas[questaoNumber];
      const selector = `input[name=questao${questaoNumber}]:checked`;
      const respostausuario = (resposta.querySelector(selector) || {}).value;
      const pcerto = document.createElement('div');
      pcerto.setAttribute('class', 'certo');
      const perrado = document.createElement('div');
      perrado.setAttribute('class', 'errado');
      pcerto.innerHTML=`Você acertou a questão ${questaoNumber} `;
      perrado.innerHTML=`Você errou a questão ${questaoNumber}, a alternativa certa era a Letra ${currentquestao.respostacorreta} `;
      console.log(pcerto);
      if (respostausuario === currentquestao.respostacorreta) {
        numCorrect++;
        resposta.appendChild(pcerto);
      } else {
        resposta.appendChild(perrado);
      }
    });

    resultadojs.innerHTML = `Você acertou ${numCorrect} de ${questoes.length} questões`;
  }

  const quisjs = document.getElementById("quiz");
  const resultadojs = document.getElementById("resultado");
  const enviarjs = document.getElementById("enviar");
  const questoes = [
    {
      questao: `<img src="img/aguaimg.jpg" class="imgq"> Água`,
      respostas: {
        a: "CaO",
        b: "CO4",
        c: "H2O",
        d: "Cl2",
      },
      respostacorreta: "c"
    },
    {
      questao: `<img src="img/amonia.jpg" class="imgq"> Amonia`,
      respostas: {
        a: "CH2O",
        b: "NH3",
        c: "C8H10N4O2",
        d: "CH4",
      },
      respostacorreta: "b"
    },
    {
      questao: `<img src="img/sal.jpg" class="imgq"> Sal de Cozinha`,
      respostas: {
        a: "NaCl",
        b: "CH4",
        c: "H2O",
        d: "Cl2",
      },
      respostacorreta: "a"
    },
    {
      questao: `<img src="img/metano.jpg" class="imgq"> Metano`,
      respostas: {
        a: "CaO",
        b: "Cl2O",
        c: "ZnS",
        d: "CH4",
      },
      respostacorreta: "d"
    },
    {
      questao: `<img src="img/carbono.jpg" class="imgq"> Dioxido de Carbono`,
      respostas: {
        a: "NH3",
        b: "CO2",
        c: "HCN",
        d: "Cl2",
      },
      respostacorreta: "b"
    },
    {
      questao: `<img src="img/etanol.jpg" class="imgq"> Etanol`,
      respostas: {
        a: "H2O2",
        b: "C8H10N4O2",
        c: "C2H6O",
        d: "C2H4",
      },
      respostacorreta: "c"
    },
    {
      questao: `<img src="img/acetona.jpg" class="imgq"> Acetona`,
      respostas: {
        a: "CHCl",
        b: "C3H6O",
        c: "C2H6O",
        d: "C2H4",
      },
      respostacorreta: "b"
    },
  ];

  buildQuiz();

  enviarjs.addEventListener("click", mostrarResultado);
})();
