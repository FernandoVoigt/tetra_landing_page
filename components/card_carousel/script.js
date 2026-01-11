const projects = ['capacete_gaules_pequeno', 'moldura_blindagens', 'rig_fotos_ipad'];
const projects_images = [4, 4, 3];
const projects_title = ['Capacete Gaules Pequeno', 'Molduras e Blindagens', 'Rig de Fotos'];

let images = [];
var gridHtmlContent = "";
projects.forEach((element, index) => {

    gridHtmlContent += `<div class="card" onclick="abrirModal(${index})">
    <div class="titulo"><h3>${projects_title[index]}</h3></div>
    <div class="imagem"><img src="projects/${element}/0.jpg"></div>
</div>`;

    var temp_images = [];
    for (let i = 0; i < projects_images[index]; i++) {
        temp_images.push(`projects/${element}/${i}.jpg`);
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