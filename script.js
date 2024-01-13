const inputUsuario = document.getElementById('inputUsuario');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const campoLista = document.getElementById('campoLista');
const lista = document.getElementById('lista');
const itens = document.getElementsByTagName('li');
const contador = document.getElementsByClassName('contador');

botaoAdicionar.addEventListener('click', () => {
  adicionarItens();
});

inputUsuario.addEventListener("keydown", (event) => {
  if(event.key == "Enter"){
    adicionarItens();
  }
})

const adicionarItens = () => {
  if (inputUsuario.value) {
    localStorage.setItem(localStorage.length, inputUsuario.value);
    location.reload();
  }
}

const criaBotaoEditar = param => {
  let botao = document.createElement('button');
  botao.classList = 'botao-editar';
  botao.value = param;
  botao.addEventListener('click', () => {
    editarItens(param);
    itens[param].append(criaBotaoSalvarEdicao(param));
    botao.remove();
  });
  return botao;
};

const editarItens = param => {
  const inputEditar = document.createElement('input');
  inputEditar.classList = 'inputEditar';
  inputEditar.id = param;
  inputEditar.value = itens[param].innerHTML;
  itens[param].classList = '';
  itens[param].innerHTML = '';
  itens[param].append(inputEditar);
  inputEditar.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
      salvarItensEditados(param);
    }
  })
};

const criaBotaoSalvarEdicao = param => {
  let botao = document.createElement('button');
  botao.innerText = 'Salvar';
  botao.classList = 'BotaoSalvarEdicao';
  botao.addEventListener('click', () => {
    salvarItensEditados(param);
  });
  return botao;
};

const salvarItensEditados = param => {
    let novoValorTexto = document.getElementById(param).value;
    localStorage.setItem(param, novoValorTexto)
    let input = document.getElementById(param);
    input.remove();
    location.reload();
};

const criaBotaoExcluir = param => {
  let botao = document.createElement('button');
  botao.classList = 'botao-excluir';
  botao.value = param;
  botao.addEventListener('click', () => {
    excluirItem(param);
    botao.remove();
  });
  return botao;
}

const excluirItem = param => {
  localStorage.removeItem(param);
  location.reload();
}

const itemLista = () => {
  let item = document.createElement('li');
  item.classList = 'item-lista';
  return item;
};



// iteração sobre o locaStorage para adicionar valor ao item,
// adiciona item à lista, adicionar botao à lista passando o index
// como parametro

for (let i = 0; i < localStorage.length; i++) {
  let item = itemLista();
  item.innerHTML = localStorage.getItem(i);
  item.value = i;
  lista.appendChild(item);
  lista.appendChild(criaBotaoEditar(i));
  lista.appendChild(criaBotaoExcluir(i));
  
}

// marcar e desmarcar item

for(let i = 0; i < itens.length; i++){
  itens[i].addEventListener("click", (event) => {
    if(itens[i].classList.contains("check")){
      itens[i].classList.remove('check');
    }else {
      itens[i].classList.add('check');
    }
  })
}

//localStorage.clear()
