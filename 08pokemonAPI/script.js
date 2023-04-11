
window.addEventListener("load", function() {
    console.log("Sucesso!")
    document.getElementById("botaoBusca").addEventListener("click", funcaoPrincipal)
})

funcaoPrincipal()

async function funcaoPrincipal(){
    // entrada
    const idPokemon = pegarValue()
    // processamento
    const pokemon = await buscarPokemon(idPokemon)
    // saida
    mostrarDados(pokemon)
}

function pegarValue(){
    const elementoInput = document.getElementById("idPokemon")
    const valor = elementoInput.value

    return valor
}

async function buscarPokemon(id){
    const url = (`https://pokeapi.co/api/v2/pokemon/${id}`)
    const resposta = await fetch(url)
    const pokemon = await resposta.json()

    return pokemon
}

function mostrarDados(personagem){
    const containerImgPokemon = document.getElementById("containerImgPokemon")
    containerImgPokemon.innerHTML = `<img class="imgPokemon" src="${personagem.sprites.front_default}">`

    const containerNomePokemon = document.getElementById("containerNomePokemon")
    containerNomePokemon.innerHTML = `<p class="nomePokemon"> ${personagem.name} </p>`

    const containerTipoPokemon1 = document.getElementById("containerTipoPokemon1")
    containerTipoPokemon1.innerHTML = `<p class="tipoPokemon1"> ${personagem.types.map((type) => type.type.name)} </p>`
}
