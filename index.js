const perguntas = [
  {
    pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
    respostas: [
      "let myVar = 5;",
      "variable myVar = 5;",
      "myVar := 5;",
    ],
    correta: 0
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Document Object Model",
      "Data Output Manager",
      "Dynamic Object Manipulator",
    ],
    correta: 0
  },
  {
    pergunta: "Qual método de array em JavaScript remove o último elemento de um array e retorna esse elemento?",
    respostas: [
      "pop()",
      "shift()",
      "splice()",
    ],
    correta: 0
  },
  {
    pergunta: "O que o operador '===' faz em JavaScript?",
    respostas: [
      "Compara valores e tipos",
      "Atribuição",
      "Compara apenas valores",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'charAt()' faz em JavaScript?",
    respostas: [
      "Retorna o caractere em um índice específico de uma string",
      "Converte uma string em caracteres minúsculos",
      "Remove caracteres especiais de uma string",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do operador '++' em JavaScript?",
    respostas: [
      "Incrementa o valor de uma variável por 1",
      "Decrementa o valor de uma variável por 1",
      "Verifica se duas variáveis são iguais",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'forEach()' em JavaScript?",
    respostas: [
      "Executa uma função para cada elemento de um array",
      "Remove o último elemento de um array",
      "Adiciona um elemento ao final de um array",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'toUpperCase()' faz em JavaScript?",
    respostas: [
      "Converte uma string para maiúsculas",
      "Converte uma string para minúsculas",
      "Inverte uma string",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador de atribuição em JavaScript?",
    respostas: [
      "=",
      "==",
      "===",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'push()' em JavaScript?",
    respostas: [
      "Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array",
      "Remove o último elemento de um array e retorna esse elemento",
      "Executa uma função para cada elemento de um array",
    ],
    correta: 0
  }
];

const quiz= document.querySelector('#quiz')
// Pegar o template do HTMl e colocar aqui no JS, usando o DOM, que transforma o documento HTML em um objeto JS
// Foi criado uma variável, const, e adicionado o valor de 'template', através do querySelector, que é uma função que pesquisa no HTML.
const template = document.querySelector('template')
// Clonar o conteúdo de todos os nós (node) ou filhos, que são as tags html
for(const item of perguntas) {
// loop ou laço de repetição
// Entre os () está a instrução. Ex baixo: criar uma variável item pra cada valor do array perguntas.
// Geralmente serve para acessar um array, e para cada item do array, fazer alguma coisa.

const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta
// atribuindo um novo valor ao quizItem (template clonado) que é o valor do conteúdo do h3, que está localizado em "pergunta"
// Pegar o quizItem, que é o template clonado > pesquisar pelo h3, acessar o textContent dele, e atribuir um novo valor, que está localizado em item.pergunta

for(let resposta of item.respostas){
// para cada item resposta vai criar outra resposta, o laço vai rodar 3 vezes, pq são 3 respostas no array.
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
// pegando o dt, acessando o quizItem, dentro de cada quizItem tem um dl e um dt, o espaço ali entre os 2, no parêntese é pq dentro de  dt vai ser procurado o dl, dt é filho de dl. Após isso, vai ser clonado tudo, usando o "cloneNode(true)"
  
  dt.querySelector('span').textContent = resposta
  // após clonado, posso alterar algumas coisas:
  // dentro do dt, tem um 'span', vamos colocar um novo valor ao textContent dele, que é "resposta"
  
  quizItem.querySelector('dl').appendChild(dt)
}
// Pra Mostrar na Tela: quizItem procura o dl e adiciona o filho dt
  

quizItem.querySelector('dl dt').remove()
// Já fui utilizado pra clonar, agora vamos remover o "Resposta A" que estava aparecendo junto com as outras repostas.

quiz.appendChild(quizItem)
}
//Colocar um filho, quizItem, no quiz, coloca a pergunta na tela.

