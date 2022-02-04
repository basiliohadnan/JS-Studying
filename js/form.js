var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = getPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemDeErros(erros);
        return;
    } 

    adicionaPacienteTabela(paciente);

    tabela.appendChild(pacienteTr);
    form.reset();

    var mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML = "";
});

function getPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
};

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(valor, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = valor;

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagemDeErros(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    });
}

function adicionaPacienteTabela(paciente) {
    if (!validaPaciente(paciente)) return;
    var pacienteTr = montaTr(paciente);
    var tabela = getTabelaPacientes();
    tabela.appendChild(pacienteTr);
}

function getTabelaPacientes() {
    var tabela = document.querySelector("#tabela-pacientes");
    return tabela;
}