var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(e) {
    e.preventDefault();
    var apiHTML = "https://api-pacientes.herokuapp.com/pacientes";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiHTML);

    var spanErroAjax = document.querySelector("#erro-ajax");

    xhr.addEventListener("load", function() {
        if (xhr.status != 200) {
            spanErroAjax.classList.remove("invisivel");
            return;
        }

        spanErroAjax.classList.add("invisivel");

        var res = xhr.responseText;
        var pacientes = JSON.parse(res);
        console.log(pacientes);

        pacientes.forEach(paciente => {
        adicionaPacienteTabela(paciente);
        });
    });

    xhr.send();

});