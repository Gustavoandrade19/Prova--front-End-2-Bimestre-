function salvarCadastro() {
    var email = document.getElementById('cadEmail').value;
    var senha = document.getElementById('cadSenha').value;
    
    var erroEmail = document.getElementById('cad-erro-email');
    var erroSenha = document.getElementById('cad-erro-senha');

    erroEmail.style.display = 'none';
    erroSenha.style.display = 'none';

    var valido = true;

    // Regra do e-mail: deve conter @
    if (!email.includes('@')) {
        erroEmail.textContent = "O e-mail deve conter o caractere @.";
        erroEmail.style.display = 'block';
        valido = false;
    }

    // Regra da senha: no mínimo 8 caracteres e uma letra maiúscula
    if (senha.length < 8 || senha === senha.toLowerCase()) {
        erroSenha.textContent = "A senha deve ter no mínimo 8 caracteres e uma letra maiúscula.";
        erroSenha.style.display = 'block';
        valido = false;
    }

    // Se estiver tudo certo, guarda no localStorage do navegador
    if (valido) {
        localStorage.setItem('emailCadastrado', email);
        localStorage.setItem('senhaCadastrada', senha);
        
        alert("Cadastro realizado com sucesso!");
        window.location.href = "index.html"; // Redireciona para o login
    }
}

function voltar() {
    window.location.href = "index.html";
}