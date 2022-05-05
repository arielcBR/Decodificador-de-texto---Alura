const btn_criptografar    = document.getElementById("botao_criptografar");
const btn_descriptografar = document.getElementById("botao_descriptografar");
const txtInput            = document.querySelector(".input-texto");
const txtOutput           = document.querySelector(".mensagem");
var   textArea            = document.getElementById("textOutput");

function btnEncriptar() {
    const textoRecebido = txtInput.value;;
    var textoEncriptado = encriptar(textoRecebido);
    escondeImg();
    txtOutput.value = textoEncriptado;

}

function encriptar(texto) {
    let matrizCodigo = [["e", "enter"], ["o", "ober"], ["u", "ufat"], ["i", "imes"], ["a", "ai"]];
    texto = texto.toLowerCase(); // Transforma texto em minusculo

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return texto;
}

function escondeImg () {
    textArea.classList.remove("bg-img");
}

btn_criptografar.addEventListener('click', btnEncriptar);



