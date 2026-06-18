function validarDados() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var er
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
        alert("Login feito com sucesso!");
    }
}


function irParaCadastro() {
    window.location.href = "cadastro.html";
}