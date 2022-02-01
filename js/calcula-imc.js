var titulo = document.querySelector(".titulo");
titulo.textContent = "Novo título";

var pacientes = document.querySelectorAll(".paciente");

for (var i=0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var pesoEhValido = validaPeso(peso);
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var alturaEhValida = validaAltura(altura);


    var tdImc = paciente.querySelector(".info-imc");

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido!"
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválida!"
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

titulo.addEventListener("click", function () {
    console.log("Olha, posso chamar uma função anônima!");
});

function calculaImc(peso, altura) {
    var imc = 0;
    
    imc = peso / (altura * altura);
    return imc.toFixed(2);
};

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura < 2.50) {
        return true;
    } else {
        return false;
    }
}