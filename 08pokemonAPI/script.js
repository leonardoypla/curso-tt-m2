// 0 - Adicionar evento em botão para executar contexto da função
async function executar(){
    console.log("Teste")
    // 1 - Pegar o valor digitado input (id do personagem)
    const elementoInput = document.getElementById("idPokemon")
    const id = elementoInput.value // ! Substituir pelo valor do INPUT !
    // 2 - Buscar personagem da API (já está pronto)
    const pokemon = await buscarPokemonDaAPI(id)

    /* MONTAR ABAIXO HTML COM O VALOR RETORNADO DA API */
    // 3 - Pegar elemento de resultado do HTML
    const elementoImg = document.getElementById("imgPokemon")
    const elementoNome = document.getElementById("nomePokemon")
    // const elementoCor = document.getElementById("corPokemon")

    // 4 - Atribuir valores do personagem na tela
    // 4.1 - Mudar o atributo src da tag img
    elementoImg.src = pokemon.sprites.front_default
    // 4.2 - Mudar o atributo innerText da tag que guarda o nome do personagem
    elementoNome.innerHTML = "#" + id + " - " + pokemon.name

    /* Dica:
        Dar console.log na variável 'personagem'
        para visualizar o objeto;
        Olhar a documentação de como o objeto é retornado
        https://rickandmortyapi.com/documentation/#character-schema
    */
}


/* Função para fazer uma request GET para a API utilizando o JS 
   Veremos logo em seguida! Foquem na leitura do Objeto na função acima.
*/
async function buscarPokemonDaAPI(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const response = await fetch(url)
    return response.json()
}