var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(e) {
    console.log(this.value);    

    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(function(paciente) {
        var tdNome = paciente.querySelectorAll(".info-nome").textContent;
        paciente.nome == 
    })
});