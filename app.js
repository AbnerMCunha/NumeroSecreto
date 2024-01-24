let numeroSecreto = 0;
let numeroChutado = 0;
let tentativas = 0;
let titulo = document.querySelector('h1');
let subtitulo = document.querySelector('p');
const botaoReiniciar = document.getElementById("reiniciar");

let listaSorteada = []


novoJogo();

function verificarChute(){

    numeroChutado = document.querySelector('input').value ;    

    //console.log(`${numeroChutado} |  Secreto é ${numeroSecreto}`);

    if( numeroChutado != null ){       

        tentativas += 1;

        if(numeroChutado == numeroSecreto ){                       
            acertou();            
        }else{
            exibirNaTela('h1', "ERROU");
            const palavraT = ( tentativas > 1 ) ? `Já foram ${tentativas} Tentativas.` :  'Já foi uma Tentativa.' ;
            if(numeroSecreto > numeroChutado)
                exibirNaTela('p', `O número Secreto é MAIOR. ${palavraT}`);
            else{
                exibirNaTela('p', `O número Secreto é MENOR. ${palavraT}`);
            }
       }       
    }
    else{
        //alert(`Preencha o Campo pra ver se Acertou o número Secreto`)  ;
        subtitulo.innerHTML = `Preencha o Campo pra ver se Acertou o número Secreto`;
    }    
    
    //console.log("oi");
}

function gerarNumeroAleatorio() {
    const a = Math.random() * 10 
    let teste = parseInt(a);

    //const jaSorteado = listaSorteada.filter( x => x == numeroSecreto);
    if (listaSorteada.includes(teste)){
        return gerarNumeroAleatorio();
    }  
    
    listaSorteada.push(teste);
    console.log(`listaSorteada : ${listaSorteada}`);
    
    return teste;
}

function novoJogo(){        
    numeroSecreto = gerarNumeroAleatorio();   

    numeroChutado = 0;
    tentativas = 0;

    //titulo.innerHTML = "Advinhe o Número Secreto"
    //subtitulo.innerHTML = "Escolha um número de 0 a 10"

    exibirNaTela('h1', "Advinhe o Número Secreto");
    exibirNaTela('p', "Escolha um número de 0 a 10");
    document.querySelector('input').value = null;

    botaoReiniciar.disabled = true;
        
}


function acertou(){
    //subtitulo.innerHTML = `Acertou o numero correto é ${numeroSecreto} em ${tentativas} Tentativas`;
    exibirNaTela("h1", "Acertou!!");
    const msg = `Você achou o número Secreto ${numeroSecreto}, em ${tentativas} tentativas!!`
    exibirNaTela("p", msg);
    
    botaoReiniciar.disabled = false;    //botaoReiniciar.removeAttribute("disabled");
}

function exibirNaTela(tag, texto){
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;

    fala(texto);
}
function fala(texto){
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 1.2 );
}

/*

function olaMundo(texto){    
    console.log(texto);    
}
function dobro(numero){
    const quadrado = numero * numero;
    console.log(`O Quadrado de  ${numero} é ${quadrado}`);    
}

function mediade3(um, dois, tres){
    const media =  ( um + dois  + tres ) / 3;
    console.log(`A média de ${um}, ${dois} e ${tres} é ${media}`);
    
}
function maior(um, dois, tres){
    let numMaior = 0;

    if (um > dois && um > tres) {
        numMaior = um;
    } else if (dois > um && dois > tres) {
        numMaior = dois;
    } else if (tres > um && tres > dois) {
        numMaior = tres;
    } else {
        numMaior = 10;
    }    

    // switch(true){
    //     case (um > dois && um > tres) :
    //         numMaior = um;
    //         break;
    //     case (dois > um && dois > tres) :
    //         numMaior = dois;
    //         break;
    //     case (tres > um && tres > dois) :
    //         numMaior = tres;
    //         break;        
    //     default: 
    //         numMaior = 10;
    //         break;        
    //     }

    console.log(`O Maior de ${um}, ${dois} e ${tres} é ${numMaior}`);
    
}

// olaMundo();
// olaMundo('ola Mundo');
// dobro(7);
// mediade3(1,5,8);
// maior(1,5,8);

*/