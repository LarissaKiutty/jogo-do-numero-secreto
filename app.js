alert('Boas vindas ao jogo do número secreto: ');
let numeroSecreto = 29;
let chute;
let tentativas = 1;

//enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
  let chute = prompt('Escolha um número entre 1 e 30');

  //se chute for igual ao número secreto
  if (chute == numeroSecreto) {

    if(tentativas == 1) {
      alert('Você acertou o número secreto ' + numeroSecreto + ' com ' + tentativas + ' tentativa');
    } else {
      alert('Você acertou o número secreto ' + numeroSecreto + ' com ' + tentativas + ' tentativas');
    }
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
  }

  tentativas++;
}