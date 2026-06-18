function validarDados() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var erroEmail = document.getElementById('erro-email');
    var erroSenha = document.getElementById('erro-senha');

    // Esconde os erros antes de testar
    erroEmail.style.display = 'none';
    erroSenha.style.display = 'none';

    var valido = true;

    // Valida o @
    if (!email.includes('@')) {
        erroEmail.textContent = "O e-mail deve conter o caractere @.";
        erroEmail.style.display = 'block';
        valido = false;
    }

    // Valida tamanho e maiúscula
    if (senha.length < 8 || senha === senha.toLowerCase()) {
        erroSenha.textContent = "A senha deve ter no mínimo 8 caracteres e uma letra maiúscula.";
        erroSenha.style.display = 'block';
        valido = false;
    }

    // Se estiver tudo certo, avisa o usuário
    if (valido) {
        alert("Login feito com sucesso!");
    }
}

// Essa é a função que faz o texto azul funcionar e ir para a tela de cadastro
function irParaCadastro() {
    window.location.href = "cadastro.html";
}