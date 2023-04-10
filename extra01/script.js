function executarTudo(){
    alterarCorDoBoxModelParaCor("boxModel01", "red")
    alterarCorDaBordaDoBoxModelParaCor("boxModel02", "solid pink 2px")
    alterarDisplayParaNone("boxModel03", "none")
    alterarDisplayParaBlock("boxModel04", "block")

}

function alterarCorDoBoxModelParaCor(idElement, cor) {
    const elementoCapturado = document.getElementById(idElement)
    elementoCapturado.style.backgroundColor = cor
}

function alterarCorDaBordaDoBoxModelParaCor(idElement, corBorda) {
    const elementoCapturado = document.getElementById(idElement)
    elementoCapturado.style.border = corBorda
}

function alterarDisplayParaNone(idElement, sumiu) {
    const elementoCapturado = document.getElementById(idElement)
    elementoCapturado.style.display = sumiu
}

function alterarDisplayParaBlock(idElement, apareceu) {
    const elementoCapturado = document.getElementById(idElement)
    elementoCapturado.style.display = apareceu
}