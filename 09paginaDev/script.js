

async function clickDoBotao(){
    console.log("Foi clicado!")

    // Entrada de dados
    // 0 - Pegar dados digitados no HTML
    const elementoNome = document.getElementById("input_nome")
    const nome = elementoNome.value

    const elementoEmail = document.getElementById("input_email")
    const email = elementoEmail.value

    const elementoMensagem = document.getElementById("input_mensagem")
    const mensagem = elementoMensagem.value

    console.log(nome)
    console.log(email)
    console.log(mensagem)

    // 0.1 - Validar dados
    if(nome == "") {
        alert("Nome é obrigatório!")
        return
    }

    if(email == "") {
        alert("Email é obrigatório!")
        return
    }

    if(mensagem == "") {
        alert("Mensagem é obrigatória!")
        return
    }

    // Processamento
    // 1 - Chamar a API enviando os dados do form
    const retornoApi = await enviarDadosParaAPI(nome, email, mensagem)

    // Saída
    // 2 - Mostrar a div de sucesso
    // 3 - Mostrar o retorno da API  
    mostrarResultadoNaTela(retornoApi)   
}

function mostrarResultadoNaTela(valores) {
    document.getElementById("status").style.display = "block"
    document.getElementById("resultados").style.display = "block"

    document.getElementById("retornoNome").innerText = valores.apiRecebeu.nome
    document.getElementById("retornoEmail").innerText = valores.apiRecebeu.email
    document.getElementById("retornoMensagem").innerText = valores.apiRecebeu.mensagem   

}

async function enviarDadosParaAPI(valorUm, valorDois, valorTres) {
    const url = "https://target-api-simples.cyclic.app/generica"
    const opcoesFetch = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: valorUm,
            email: valorDois,
            mensagem: valorTres
        })
    }

    const resposta = await fetch(url, opcoesFetch)
    const retornoApi = await resposta.json()

    return retornoApi
}

function outraCoisa(){
    console.log("Outra coisa!")
}