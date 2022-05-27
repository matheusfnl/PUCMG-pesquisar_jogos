let jogos = [
  rainbow_six = {
    nome: 'Tom Clancy`s Rainbow Six Siege',
    descricao: "",
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: '../jogo_page/imagens/rb6.png',
    tag: 'terror',
    link: '../jogo_page/rb6.html',
  },
  fall_guys = {
    nome: 'Fall Guys: Ultimate Knockout',
    descricao: "",
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: '../jogo_page/imagens/fallguys.jpg',
    tag: 'ritmo',
    link: '../jogo_page/fallguys.html',
  },
  fortnite = {
    nome: 'Fortnite',
    descricao: "",
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: '../jogo_page/imagens/fortnite.jpg',
    tag: 'ritmo',
    link: '../jogo_page/fortnite.html',
  },
  elden_ring = {
    nome: 'Elden Ring',
    descricao: "",
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: '../jogo_page/imagens/eldenring.jpg',
    tag: 'ritmo',
    link: '../jogo_page/eldenring.html',
  },
  osu = {
    nome: 'Osu!',
    descricao: "",
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: '../jogo_page/imagens/osu.jpeg',
    tag: 'FPS',
    link: '../jogo_page/osu.html',
  },
]

const pesquisa = document.getElementById('pesquisa');
let timeout;

pesquisa.onkeydown = (event) => {
  const inputBox = document.getElementById('pesquisa');

  var key = event.keyCode || event.charCode;
  if( key == 8 && inputBox.value.length === 1 ){
    const previewJogos = document.getElementById('previewJogos');

    while(previewJogos.firstChild) { previewJogos.removeChild(previewJogos.lastChild) }
  }
}

pesquisa.addEventListener('keypress', () => {
  pesquisarJogos()
})

function pesquisarJogos() {
  clearTimeout(timeout);

  const inputBox = document.getElementById('pesquisa');
  const previewJogos = document.getElementById('previewJogos');

  while(previewJogos.firstChild) { previewJogos.removeChild(previewJogos.lastChild) }

  timeout = setTimeout(() => {
    if(inputBox.value.replace(/\s/g, '').length) {
      jogos.forEach(jogo => {
        if(jogo.nome.toLowerCase().includes(inputBox.value.toLowerCase())) {
          const colDiv = document.createElement('div');
          colDiv.classList.add('col-12')
          colDiv.classList.add('pointer')
          colDiv.classList.add('zindex1000')
  
          colDiv.innerHTML = `
            <div class="cardPreview" onclick="goToPage('${jogo.link}')">
              <img class="imgPreview" src="${jogo.img}">
              <h5 class="nomePreview">${jogo.nome}</h5>
            </div>
          `;
          previewJogos.appendChild(colDiv)
        }
      });
    }
  }, 450);
}

function goToPage(link) {
  console.log(link)
  window.location = link;
}

function removerJogos() {
  timeout = setInterval(() => {
    const previewJogos = document.getElementById('previewJogos');
  
    while(previewJogos.firstChild) { previewJogos.removeChild(previewJogos.lastChild) }
  }, 150);
}