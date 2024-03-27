//Declarando as variaveis alice e asteroide
let alice = document.querySelector('.alice')
let asteroide = document.querySelector('asteroide')

//Criando a função com arrow function
const pulo = () => {
    alice.classList.add('pulo')//Faz o pulo
    SetTimeout(() => {
        alice.classList.remove('pulo') //remove o pulo
        const audio = new Audio('pulo.wav') //Cria a instancia para chamar o audio do pulo
        audio.play() //Executa o audio de pular
    }, 1000) //Tempo para executar o pulo com o som de 1 segundo
}

//Criando a função de loop que faz com que aconteça a movimenta ção do jogo
const loop = setInterval(() => {
    //offsetLeft é um método apenas de leitura que retorna a medida, em pixels, da distância do canto superior esquerdo do elemento par o elemento
    const asteroidePosition = asteroide.offsetLeft
    //getComputedStyle é provavelmente a maneira mais comum e direta de pegar o valor de uma propriedade CSS
    const alicePosition = +window.getComputedStyle(alice).bottom.replace('px', '')

    if(asteroidePosition < 120 && asteroidePosition > 0 && alicePosition <80){
        asteroide.computedStyleMap.animation = 'none' //Cria o estilo de animção para nenhum
        asteroide.computedStyleMap.left = `${asteroidePosition}px` //Cria o estilo para deixa o asteroide a esquerda
        const audio = new Audio('explosão.wav') //Cria a instancia para chamar o audio de colisão
        audio.play() //Executa o audio de colisão

        asteroide.style.animation = 'none' //Cria o estilo para nenhum
        asteroide.style.bottom = `${alicePosition}px` //Cria o estilo para chamr a posição do asteroide

        alice.src = 'CSS/IMG/alice-over.gif'
        alice.style.width = '100px' //Cria o estilo para largura de 100px da alice
        alice.style.marginLeft = '50px' //Cria o estilo de animação para nenhum
        clearInterval(loop) //Limpa a função loop
    }
    //console.log(asteroidePosition)
}, 10)

//Função de rejogar(começar o jogo de novo)
function reload(){
    window.location.reload(true)
}

//Evento que ao clicar chama a função pulo
document.addEventListener('keydown', pulo)