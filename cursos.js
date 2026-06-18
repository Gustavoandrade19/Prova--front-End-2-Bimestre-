const cursos = [
    ["Engenharia Civil", "Exatas"], ["Ciência da Computação", "Exatas"], ["Matemática", "Exatas"],
    ["Direito", "Humanas"], ["História", "Humanas"], ["Geografia", "Humanas"],
    ["Medicina", "Natureza"], ["Biologia", "Natureza"], ["Enfermagem", "Natureza"],
    ["Letras", "Linguagens"], ["Jornalismo", "Linguagens"], ["Publicidade", "Linguagens"]
];

function filtrarCursos() {
    var area = document.getElementById('filtroArea').value;
    var lista = document.getElementById('listaCursos');
    
    lista.innerHTML = ""; 

    if (area === "") return;

    var filtrados = cursos.filter(item => item[1] === area);

   
    filtrados.forEach(item => {
        var li = document.createElement('li');
        li.textContent = item[0];
        lista.appendChild(li);
    });
}