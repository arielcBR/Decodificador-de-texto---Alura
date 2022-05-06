const btn_criptografar    = document.getElementById("botao_criptografar");
const btn_descriptografar = document.getElementById("botao_descriptografar");
const btn_copy_input      = document.getElementById("btn-copy_input");
const btn_copy_output     = document.getElementById("btn-copy_output");
const txtInput            = document.querySelector("#textInput");
const txtOutput           = document.querySelector("#textOutput");

function btnEncriptar() {
    const textoRecebido = txtInput.value;
    var textoEncriptado = encriptar(textoRecebido);
    exibicaoImg();
    txtOutput.value = textoEncriptado;
}

function encriptar(texto) {
    let matrizCodigo = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a", "ai"], ["u", "ufat"]];
    texto = texto.toLowerCase(); 

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return texto;
}

function btnDesencriptar() {
    const textoRecebido = txtInput.value;
    var textoDesencriptado = desencriptar(textoRecebido);
    exibicaoImg();
    txtOutput.value = textoDesencriptado;
}

function desencriptar(texto) {
    let matrizCodigo = [["enter", "e"], ["ober", "o"], ["imes", "i"], ["ai", "a"], ["ufat", "u"]];
    texto = texto.toLowerCase(); // Transforma texto em minusculo

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return texto;
}

function exibicaoImg() {
    let textArea = document.getElementById("textOutput");
    textArea.classList.remove("bg-img");
}

btn_criptografar.addEventListener('click', btnEncriptar);

btn_descriptografar.addEventListener('click', btnDesencriptar);

btn_copy_input.addEventListener('click', () => {
    txtInput.select();
    document.execCommand("Copy");
})

btn_copy_output.addEventListener('click', () => {
    txtOutput.select();
    document.execCommand("Copy");
})


