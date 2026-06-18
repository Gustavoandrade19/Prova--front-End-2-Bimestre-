function salvarCadastro() {
    var email = document.getElementById('cadEmail').value;
    var senha = document.getElementById('cadSenha').value;
    
    var erroEmail = document.getElementById('cad-erro-email');
    var erroSenha = document.getElementById('cad-erro-senha');

    erroEmail.style.display = 'none';
    erroSenha.style.display = 'none';

    var valido = true;

    if (!email.includes('@')) {
        erroEmail.textContent = "O e-mail deve conter o caractere @.";
        erroEmail.style.display = 'block';
        valido = false;
    }

    if (senha.length < 8 || senha === senha.toLowerCase()) {
        erroSenha.textContent = "A senha deve ter no mínimo 8 caracteres e uma letra maiúscula.";
        erroSenha.style.display = 'block';
        valido = false;
    }

    
    if (valido) {
        localStorage.setItem('emailCadastrado', email);
        localStorage.setItem('senhaCadastrada', senha);
        
        alert("Cadastro realizado com sucesso!");
        window.location.href = "index.html"; 
    }
}

function voltar() {
    window.location.href = "index.html";
}