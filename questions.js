const buttons = document.querySelectorAll(".btn");
const title = document.querySelector("#title");
const gameTitle = document.querySelector("#game-title");
const alternativeA = document.querySelector(".a");
const alternativeB = document.querySelector(".b");
const alternativeC = document.querySelector(".c");
const alternativeD = document.querySelector(".d");
const alternativeE = document.querySelector(".e");
const alternativeF = document.querySelector(".f");
const modal = document.querySelector("#modal");

const pointElement = document.querySelector("#point");

const setQuestions = () => {
  console.log(gameTitle.getAttribute("data-value"));
  if (gameTitle.getAttribute("data-value") === "mat") {
    // matematica
    return [
      {
        title:
          "Verbo: Almorzar <br> Sujeto: 1ª persona del singular <br> Indicativo: Pretérito perfecto compuesto.",
        a: "Yo he almorzado ",
        b: "Tú has almorzado",
        c: "Ella ha Almorzado",
        d: "Nosotros/as hemos almorzado",
        e: "Vosotros/as habéis almorzado",
        f: "Ellos/ellas han almorzado",
        correctAnswer: "a",
      },
      {
        title:
          "Verbo: Celebrar <br> Sujeto: 1ª persona del plural <br> Indicativo: Pretérito perfecto compuesto.",
          a: "Yo he celebrado ",
          b: "Tú has celebrado",
          c: "Ella ha celebrado",
          d: "Nosotros/as hemos celebrado",
          e: "Vosotros/as habéis celebrado",
          f: "Ellos/ellas han celebrado",
          correctAnswer: "d",
      },
      {
        title:
          "Verbo: Ejercitar <br> Sujeto: 2ª pessoa del singular <br> Indicativo: Pretérito perfecto compuesto.",
          a: "Yo he ejercitado",
          b: "Tú has ejercitado",
          c: "Ella ha ejercitado",
          d: "Nosotros/as hemos ejercitado",
          e: "Vosotros/as habéis ejercitado",
          f: "Ellos/ellas han ejercitado",
          correctAnswer: "b",
      },
      {
        title:
          "Verbo: Hablar <br> Sujeto: 3ª persona del plural <br> Indicativo: Pretérito perfecto compuesto.",
          a: "Yo he hablado ",
          b: "Tú has hablado",
          c: "Ella ha hablado",
          d: "Nosotros/as hemos hablado",
          e: "Vosotros/as habéis hablado",
          f: "Ellos/ellas han hablado",
          correctAnswer: "f",
      },
      {
        title:
          "Verbo: Dormir <br> Sujeto: 2ª persona del plural <br> Indicativo: Pretérito perfecto compuesto.",
          a: "Yo he dormido ",
          b: "Tú has dormido",
          c: "Ella ha dormido",
          d: "Nosotros/as hemos dormido",
          e: "Vosotros/as habéis dormido",
          f: "Ellos/ellas han dormido",
          correctAnswer: "e",
      },
      {
        title:
          "Verbo: Salir <br> Sujeto: 3ª persona del singular <br> Indicativo: Pretérito perfecto compuesto.",
          a: "Yo he salido ",
          b: "Tú has salido",
          c: "Ella ha salido",
          d: "Nosotros/as hemos salido",
          e: "Vosotros/as habéis salido",
          f: "Ellos/ellas han salido",
          correctAnswer: "c",
      },
    ];
  }
};

let questions = setQuestions();

var point = 0;
var i = 0;
var amountQuestions = questions.length;
const setNewQuestions = () => {
  if (amountQuestions === i) {
    modal.classList.add("modal-appearence");
    modal.classList.remove("modal-none");
  } else {
    title.innerHTML = questions[i].title;
    alternativeA.innerHTML = questions[i].a;
    alternativeB.innerHTML = questions[i].b;
    alternativeC.innerHTML = questions[i].c;
    alternativeD.innerHTML = questions[i].d;
    alternativeE.innerHTML = questions[i].e;
    alternativeF.innerHTML = questions[i].f;
  }
};

setNewQuestions();
const checkQuestions = (answer, questions) => {
  // pegar as questoes e verificar qual esta correta e dps se tiver correta soma 5 pontos
  if (questions[i].correctAnswer === answer) {
    // resposta certa

    i++;
    point += 5;

    setNewQuestions();
    pointElement.innerHTML = point.toString();
  } else if (questions[i].correctAnswer !== answer) {
    // resposta errada

    i += 1;

    setNewQuestions();
    pointElement.innerHTML = point.toString();
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    checkQuestions(button.value, questions);
  });
});
