// CRIAR COMENTARIO
let comentarioLocalStorage = [];

const getComentario = () => {
  if(JSON.parse(localStorage.getItem('comentarios')) === null) {
    return [];
  }

  return JSON.parse(localStorage.getItem('comentarios'));
}

const setComentario = (comentario) => {
  localStorage.setItem('comentarios', JSON.stringify(comentario));
}

const criaComentario = (nome, comentario, jogo, id) => {
  const caixaComentario = document.createElement('div');
  const nomePrimeiraLetra = nome.charAt(0)
  const nomeResto = nome.substring(1)

  caixaComentario.classList.add('col-6');
  caixaComentario.classList.add('instancia_comentarios');

  caixaComentario.innerHTML = `
    <div class="area_comentarios">
      <div class="comentarios">
        <div class="row">
          <div class="col-9">
            <h4> <span class="letra">${nomePrimeiraLetra}</span>${nomeResto} </h4>
          </div>

          <div class="col-1">
          <a onclick="editComentario(${id})" class="icon"> <img id="${id}_img" src="../utils/imagens/edit-icon.png" /> </a>
          </div>

          <div class="col-2">
            <a onclick="removeComentario('${jogo}', ${id})" class="icon"> <img src="../utils/imagens/deletar-icon.png" /> </a>
          </div>
        <div>
        <p id="${id}" class="coment_desc"> ${comentario} </p>
      </div>
    </div>
    `;
  document.getElementById('lista_comentarios').appendChild(caixaComentario);
}

const limparComentarios = () => {
  const comenatrios = document.getElementById('lista_comentarios');

  while(comenatrios.firstChild) { comenatrios.removeChild(comenatrios.lastChild) }
}

const atualizarTela = (jogo) => {
  limparComentarios();
  const comentario = getComentario();
  comentario.forEach((item) => {
    if(item.tela === jogo) {
      criaComentario(item.nome, item.comentario, jogo, comentario.indexOf(item));
    }
  });
}

const inserirComentario = (jogo) => {
  const instanceNome = document.getElementById('nomeInput');
  const instanceComentario = document.getElementById('comentarioInput');

  const comentariosLocalStorage = getComentario();

  const comentario = {
    nome: instanceNome.value,
    comentario: instanceComentario.value,
    tela: jogo,
  }

  instanceNome.value = '';
  instanceComentario.value = '';

  comentariosLocalStorage.push(comentario);

  setComentario(comentariosLocalStorage);
  atualizarTela(jogo);
}

const removeComentario = (jogo, id) => {
  const comentariosLocalStorage = getComentario();

  comentariosLocalStorage.splice(id, 1);

  setComentario(comentariosLocalStorage);

  atualizarTela(jogo);
}

let editing = false;

const editComentario = (id) => {
  editing = !editing;
  const comentario = document.getElementById(id)
  const imagem = document.getElementById(id + '_img')

  if(editing) {
    comentario.contentEditable = true;
    imagem.src = "../utils/imagens/confirm-icon.png"
    comentario.focus();
  }
  else {
    comentario.contentEditable = false;
    imagem.src = "../utils/imagens/edit-icon.png"

    const comentariosLocalStorage = getComentario();

    comentariosLocalStorage[id].comentario = comentario.textContent;
    console.log(comentariosLocalStorage[id]);

    setComentario(comentariosLocalStorage);
  }
}
