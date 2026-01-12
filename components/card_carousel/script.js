const projects = [
    ['pecas_funcionais', 7, 'Peças Funcionais'],
    ['decoracao', 4, 'Decoração'],
    ['bafometro', 5, 'Bafômetro'],
    ['pecas_l200', 6, 'Peças Mitsubishi L200'],
    ['soleira_kombi', 3, 'Soleira Kombi'],
    ['capacete_gaules_pequeno', 4, 'Capacete Gaules Pequeno'],
    ['placa_decorativa', 5, 'Placa Decorativa'],
    ['moldura_blindagens', 3, 'Molduras e Blindagens'],
    ['rig_fotos_ipad', 3, 'Rig de Fotos'],
    ['eddie_iron_maiden', 2, 'Eddie Iron Maiden'],
];

let images = [];
var gridHtmlContent = "";
projects.forEach((element, index) => {

    gridHtmlContent += `<div class="card" onclick="abrirModal(${index})">
    <div class="titulo"><h3>${element[2]}</h3></div>
    <div class="imagem"><img src="projects/${element[0]}/0.jpg"></div>
</div>`;

    var temp_images = [];
    for (let i = 0; i < element[1]; i++) {
        temp_images.push(`projects/${element[0]}/${i}.jpg`);
    }
    images.push(temp_images);

});

const grid = document.getElementsByClassName("grid")[0];
grid.innerHTML = gridHtmlContent;

let temaAtual = 0;
let index = 0;

const modal = document.getElementById("modal");
const imagemModal = document.getElementById("imagemModal");

function abrirModal(tema) {
    temaAtual = tema;
    index = 0;
    imagemModal.src = images[temaAtual][index];
    modal.style.display = "flex";
}


function fecharModal() {
    modal.style.display = "none";
}


function mudarSlide(direcao) {
    index += direcao;

    if (index < 0) index = images[temaAtual].length - 1;
    if (index >= images[temaAtual].length) index = 0;

    imagemModal.src = images[temaAtual][index];
}