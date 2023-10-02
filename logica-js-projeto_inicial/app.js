alert('Bem Vindo ao joago do Número secreto');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentetivas = 1;

while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O némero secreto e menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        } tentetivas++
    }
}

let palavraTentativa = tentetivas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentetivas} ${palavraTentativa}`);


//if (tentetivas > 1) {
//  alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentetivas} tentativas`);
// } else {
//   alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentetivas} tentativa`);
// }

