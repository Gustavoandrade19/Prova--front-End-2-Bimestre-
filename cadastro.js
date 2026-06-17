document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // 

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmar = document.getElementById('confirmarSenha').value;

    var erroEmail = document.getElementById('erro-email');
    var erroSenha = document.getElementById('erro-senha');
    var erroConfirmar = document.getElementById('erro-confirmar');

    erroEmail.style.display = 'none';
    erroSenha.style.display = 'none';
    erroConfirmar.style.display = 'none';

    var valido = true;


    if (!email.includes('@')) {
        erroEmail.textContent = "O e-mail deve conter o caractere @.";
        erroEmail.style.display = 'block';
        valido = false;
    }

  
    if (senha.lengtSenhah < 8 || senha === senha.toLowerCase()) {
        erroSenha.textContent = "A senha deve conter no mínimo 8 caracteres e uma letra maiúscula.";
        erroSenha.style.display = 'block';
        valido = false;
    }

    
    if (senha !== confirmar) {
        erroConfirmar.textContent = "A confirmação de senha deve ser exatamente igual à senha.";
        erroConfirmar.style.display = 'block';
        valido = false;
    }

    
    if (valido) {
        alert("Inscrição salva com sucesso!");
        window.location.href = "index.html"; n
    }
});


function voltar() {
    window.location.href = "index.html";
}
