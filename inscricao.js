function mudarAtendimento() {
    var opcao = document.getElementById('atendimento').value;
    var bloco = document.getElementById('blocoEspecial');
    
    if (opcao === "Sim") {
        bloco.classList.remove('oculto');
    } else {
        bloco.classList.add('oculto');
        document.getElementById('necessidade').value = ""; 
    }
}


function confirmarInscricao() {
    var lingua = document.getElementById('lingua').value;
    var estado = document.getElementById('estado').value;
    var cidade = document.getElementById('cidade').value;
    var atendimento = document.getElementById('atendimento').value;
    var necessidade = document.getElementById('necessidade').value;
    var res = document.getElementById('resultado');

    res.className = "oculto"; 


    if (lingua === "" || estado === "" || cidade === "") {
        res.textContent = "Erro: Preencha todos os campos!";
        res.className = "msg-erro";
        return;
    }

    if (atendimento === "Sim" && necessidade.trim() === "") {
        res.textContent = "Erro: Informe a necessidade especializada!";
        res.className = "msg-erro";
        return;
    }

    
    res.textContent = "Inscrição realizada para a prova de " + lingua + "!";
    res.className = "msg-sucesso";

    
    document.getElementById('lingua').value = "";
    document.getElementById('estado').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('atendimento').value = "Não";
    document.getElementById('necessidade').value = "";
    document.getElementById('blocoEspecial').classList.add('oculto');
}