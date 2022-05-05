const btn_criptografar = document.getElementById("botao_criptografar");
const btn_descriptografar = document.getElementById("botao_descriptografar");
const txtInput = document.querySelector(".input-texto");
const txtOutput = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoRecebido = txtInput.value;;
    var textoEncriptado = encriptar(textoRecebido);
    txtOutput.value = textoEncriptado;
}

function encriptar(texto) {
    let matrizCodigo = [["a","ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"]];
    texto = texto.toLowerCase(); // Transforma texto em minusculo


    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return texto;
}

btn_criptografar.addEventListener('click', btnEncriptar);



