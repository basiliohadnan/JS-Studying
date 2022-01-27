var titulo = document.querySelector(".titulo");
titulo.textContent = "Novo título";

var pacientes = document.querySelectorAll(".paciente");

for (i=0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var pesoValido = true;

    var tdImc = paciente.querySelector(".info-imc");

    if (peso <= 0 || peso >= 999) {
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido!"
        pesoValido = false;
    }

    var alturaValida = true;

    var tdAltura= paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválida!"
        alturaValida = false;
    }

    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }

}

