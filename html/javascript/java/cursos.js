const cursos = [
    ["Engenharia Civil", "Exatas"], ["Ciência da Computação", "Exatas"], ["Matemática", "Exatas"],
    ["Direito", "Humanas"], ["História", "Humanas"], ["Geografia", "Humanas"],
    ["Medicina", "Natureza"], ["Biologia", "Natureza"], ["Enfermagem", "Natureza"],
    ["Letras", "Linguagens"], ["Jornalismo", "Linguagens"], ["Publicidade", "Linguagens"]
];

function filtrarCursos() {
    var area = document.getElementById('filtroArea').value;
    var lista = document.getElementById('listaCursos');
    
    lista.innerHTML = ""; // Limpa a lista anterior

    if (area === "") return;

    // Método .filter() exigido pelo professor Sérgio
    var filtrados = cursos.filter(item => item[1] === area);

    // Mostra os cursos na tela de forma dinâmica
    filtrados.forEach(item => {
        var li = document.createElement('li');
        li.textContent = item[0];
        lista.appendChild(li);
    });
}