// ---------------------- EXERCÍCIOS 1 E 2 -----------------------------

function soma(){
    let v1 = Number(document.getElementById("v1").value);
    let v2 = Number(document.getElementById("v2").value);
    let v3 = Number(document.getElementById("v3").value);

    let resultado1 = v1 + v2 + v3

    document.getElementById("resultado1").innerHTML = "O resultado da soma é: " + resultado1;
}

function soma2() {
    // Obter os valores dos inputs
    var v4 = Number(document.getElementById("v4").value);
    var v5 = Number(document.getElementById("v5").value);
    var v6 = Number(document.getElementById("v6").value);

    // Somar os valores dos inputs
    var resultado2 = v4 + v5 + v6;

    // Exibir o resultado na div
    document.getElementById("resultado2").innerHTML = "O resultado da soma é: " + resultado2;
}

// ---------------------- EXERCÍCIOS CASA -----------------------------


function imprimePares() {
    let resultado = "";
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        resultado += i + " ";
      }
    }
    document.getElementById("rq1").innerHTML = resultado;
  }

function calculaMedia() {
    let q2n1 = Number(document.getElementById("q2n1").value);
    let q2n2 = Number(document.getElementById("q2n2").value);
    let q2n3 = Number(document.getElementById("q2n3").value);

    let rq2 = (q2n1 + q2n2 + q2n3) / 3

    document.getElementById("rq2").innerHTML = "O resultado da soma é: " + rq2;
}

function menorNumero() {
    let q3n1 = Number(document.getElementById("q3n1").value);
    let q3n2 = Number(document.getElementById("q3n2").value);

    let menorNumero = q3n1;

  if (q3n2 < menorNumero) {
    menorNumero = q3n2;
  }

  document.getElementById("rq3").innerHTML = "O menor número é: " + menorNumero;
}

function maiorNumero() {
    let q4n1 = Number(document.getElementById("q4n1").value);
    let q4n2 = Number(document.getElementById("q4n2").value);

    let maiorNumero = q4n1;

  if (q4n2 > maiorNumero) {
    maiorNumero = q4n2;
  }

  document.getElementById("rq4").innerHTML = "O maior número é: " + maiorNumero;
}

function inverteArray(array) {
    const arrayInvertido = array.reverse();
    return arrayInvertido;
  }

    console.log(inverteArray([1, 2, 3, 4])); 
    console.log(inverteArray(["a", "b", "c"]));


function encontrarNumero(X, array) {
    const encontrado = array.includes(X);
    return encontrado;
}

console.log(encontrarNumero(2, [2, 7, 8, 3])); // true
console.log(encontrarNumero(5, [2, 7, 8, 3])); // false

      