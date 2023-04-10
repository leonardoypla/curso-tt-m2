function executarTudo(){
    somarOsDoisNumerosDosInputsMelhorada()
    subtrairValoresDosInputs()
    multiplicarValoresDosInputs()
    dividirValoresDosInputs()


}


// As quatro funções principais

function somarOsDoisNumerosDosInputsMelhorada(){
    const valor01 = pegarValorNumerico("input_01_ex01")
    const valor02 = pegarValorNumerico("input_02_ex01")

    const resultadoSoma = somarDoisNumeros(valor01, valor02)

    mostrarResultadoEmUmElemento("elResultadoSoma", resultadoSoma)
}

function subtrairValoresDosInputs(){
    const valor01 = pegarValorNumerico("input_01_ex01")
    const valor02 = pegarValorNumerico("input_02_ex01")

    const resultadoSubtracao = subtrairDoisNumeros(valor01, valor02)

    mostrarResultadoEmUmElemento("elResultadoSubtracao", resultadoSubtracao)
}

function multiplicarValoresDosInputs(){
    const valor01 = pegarValorNumerico("input_01_ex01")
    const valor02 = pegarValorNumerico("input_02_ex01")

    const resultadoMultiplicacao = multiplicarDoisNumeros(valor01, valor02)

    mostrarResultadoEmUmElemento("elResultadoMultiplicacao", resultadoMultiplicacao)
}

function dividirValoresDosInputs(){
    const valor01 = pegarValorNumerico("input_01_ex01")
    const valor02 = pegarValorNumerico("input_02_ex01")
    
    if (valor02 == 0) {
        document.getElementById("elResultadoDivisao").style.backgroundColor = "red";
        return;
    } else {
        const resultadoDivisao = dividirDoisNumeros(valor01, valor02)
        mostrarResultadoEmUmElemento("elResultadoDivisao", resultadoDivisao)
    }
}


// As funções menores para usar nas 4

function pegarValorNumerico(idElemento){
    const inputCapturado = document.getElementById(idElemento)
    const valor = Number(inputCapturado.value)

    return valor
}

function somarDoisNumeros(num1, num2) {
    return num1 + num2
}

function subtrairDoisNumeros(num1, num2){
    return num1 - num2
}

function multiplicarDoisNumeros(num1, num2){
    return num1 * num2
}

function dividirDoisNumeros(num1, num2){
    return num1 / num2
}

function mostrarResultadoEmUmElemento(idElemento, valorASerMostrado) {
    document.getElementById(idElemento).innerHTML = valorASerMostrado
}