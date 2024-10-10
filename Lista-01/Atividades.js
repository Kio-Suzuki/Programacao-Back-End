// 1. Escreva uma função que calcule e retorne o fatorial de um número.

function fatorial(n) {
  if(n == 0 || n == 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}

// 2. Escreva uma função que retorne uma String contendo uma sequência de N mensagens do texto informado pelo usuário. O valor de N e a mensagem são informados por parâmetro.

function sequenciaMensagens(n, mensagem) {
  let sequencia = '';
  for(let i = 0; i < n; i++) {
    sequencia += mensagem + ' ';
  }
  return sequencia;
}

// 3. Escreva uma função que receba 2 valores e uma operação básica: adição, subtração, multiplicação e divisão e retorne o resultado da operação.
// Observação: Faça a validação para prevenir a divisão por 0 e também para garantir que a operação informada é válida. Retorne nulo para os casos de erro.

function operacaoBasica(a, b, o) {
  switch(o) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if(b == 0) {
        return null;
      }
      return a / b;
  }
}

// 4. Escreva uma função que retorne um vetor contendo o resultado da tabuada de um número recebido por parâmetro. Cada resultado na respectiva posição do índice.

function tabuada(n) {
  let tabuada = [];
  for(let i = 0; i <= 10; i++) {
    tabuada.push(n * i);
  }
  return tabuada;
}

// 5. Escreva uma função que retorne um número fornecido pelo usuário, porém invertido. 
//Por exemplo, o usuário fornece o número 875 e a função retorna o número 578. O argumento da função e o retorno deve ser um valor inteiro.

function inverteNumero(n) {
  return parseInt(n.toString().split('').reverse().join(''));
}

// 6. Escreva uma função que permita contar o número de vogais contidas em uma string fornecida por parâmetro. 
//Por exemplo, o usuário informa a string “Brocolis”, e a função retorna o número 3 (há 3 vogais nessa palavra).

function contadorVogais(string) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let cont = 0;
  string = string.toLowerCase();
  for(let i = 0; i < string.length; i++) {
    if(vogais.includes(string[i])) {
      cont++;
    }
  }
  return cont;
}

// 7. Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se a sequência está bem formada ou não. 
//O retorno deve ser um valor lógico. Exemplo: “(([]))” retorna true, “(([)])” retorna falso.

function verificaSequencia(string) {
  if(string.length % 2 != 0) {
    return false;
  } else {
    meio = string.length / 2;
    let string1 = string.substring(0, meio);
    let string2 = string.substring(meio);
    string2 = string2.split('').reverse().join('');
    for(let i = 0; i < meio; i++) {
      switch(string1[i]) {
        case '(':
          if(string2[i] != ')') {
            return false;
          }
          break;
        case '[':
          if(string2[i] != ']') {
            return false;
          }
          break;
      }
    }
    return true;
  }
}

// 8. Escreva uma função que receba um número e retorne uma lista de objetos (id, nome e idade) aleatórios gerados dinamicamente. 
//O código deve ser sequencial; use uma lista de nomes pré-definida; e gere idades entre 18 e 90 anos.

function gerarObjetos(n) {
  let nomes = ['João', 'Maria', 'José', 'Ana', 'Pedro', 'Carla', 'Paulo', 'Luana', 'Carlos', 'Mariana'];
  let objetos = [];
  for(let i = 0; i < n; i++) {
    let objeto = {
      id: i,
      nome: nomes[Math.floor(Math.random() * 10)],
      idade: Math.floor(Math.random() * 73) + 18
    };
    objetos.push(objeto);
  }
  return objetos;
}


// 9. Escreva uma função que receba a lista de objetos gerados anteriormente e calcule a média de idades das pessoas presentes na lista.

function mediaIdades(objetos) {
  let soma = 0;
  for(let i = 0; i < objetos.length; i++) {
    soma += objetos[i].idade;
  }
  return soma / objetos.length;
}

// 10. Escreva uma função que receba a lista de objetos gerados anteriormente e ordene os dados por um dos atributos informados por parâmetros

function ordenarObjetos(objetos, atributo) {
  objetos.sort((a, b) => {
    if(a[atributo] < b[atributo]) {
      return -1;
    }
    if(a[atributo] > b[atributo]) {
      return 1;
    }
    return 0;
  });
  return objetos;
}
