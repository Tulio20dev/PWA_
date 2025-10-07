const saudacao = document.getElementById("saudacao");
const frase = document.getElementById("frase");
const icone = document.getElementById("icone");

const frasesManha = [
    "Olá, bom dia!!",
    "Seu dia será maravilhoso",
    "Espero melhoras na sua vida"
]; 
const frasesTarde = [
    "Olá, boa tarde!!",
    "Aprecie o pôr do sol!!",
    "Ver o sol se escondendo atrás das montanhas é lindo!!"        
];
const frasesNoite = [
    "Olá, boa noite!!",
    "Noites estreladas são as melhores",
    "Vai dormir rapaz!!"
];

function atualizarSaudacao() {
    const hoje = new Date();
    const hora = hoje.getHours();

    let msgSaudacao, imgFundo, imgIcone, frasesDoMomento;

    if (hora >= 5 && hora < 12) {
        msgSaudacao = "bom dia";
        imgFundo = "url('imgs/imgManha.png')";
        imgIcone = "imgs/mug-hot-alt.png";
        frasesDoMomento = frasesManha;

    } else if (hora >= 12 && hora < 18) {
        msgSaudacao = "boa tarde";
        imgFundo = "url('imgs/entardecer_512.png')";
        imgIcone = "imgs/cloud-sun.png";
        frasesDoMomento = frasesTarde;

    } else {
        msgSaudacao = "boa noite";
        imgFundo = "url('imgs/anoitecer_512.png')";
        imgIcone = "imgs/moon-stars.png";
        frasesDoMomento = frasesNoite;
    }
    saudacao.textContent = msgSaudacao;
    
    document.body.style.backgroundImage = imgFundo;
    icone.src = imgIcone;
    const randomIndex = Math.floor(Math.random()* frasesDoMomento.length);
    frase.textContent = frasesDoMomento[randomIndex];
}
atualizarSaudacao();
setInterval(atualizarSaudacao, 8000);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.log("Erro no Service Worker:", err));
}


