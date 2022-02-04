var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(e) {
    e.preventDefault();
    var apiHTML = "https://api-pacientes.herokuapp.com/pacientes";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiHTML);

    xhr.addEventListener("load", function() {
        var res = xhr.responseText;
        var pacientes = JSON.parse(res);
        console.log(pacientes);

        pacientes.forEach(paciente => {
        adicionaPacienteTabela(paciente);
        });
    });

    xhr.send();

});