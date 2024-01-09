const inputUsuario = document.getElementById('inputUsuario');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const campoLista = document.getElementById('campoLista');
const lista = document.getElementById('lista');
const itens = document.getElementsByTagName('li');

botaoAdicionar.addEventListener('click', () => {
  if (inputUsuario.value) {
    localStorage.setItem(localStorage.length, inputUsuario.value);
    location.reload();
  }
});

const criaBotaoEditar = param => {
  let botao = document.createElement('button');
  botao.innerText = '✎';
  botao.classList = 'BotaoEditar';
  botao.value = param;
  botao.addEventListener('click', () => {
    editarItens(botao.value);
    itens[param].append(criaBotaoSalvarEdicao(botao.value));
  });
  return botao;
};

const editarItens = param => {
  const inputEditar = document.createElement('input');
  inputEditar.classList = 'inputEditar';
  inputEditar.id = param;
  
//   for (let i = 0; i < itens.length; i++) {
//     if (itens[i].value == param) {
//       inputEditar.value = itens[i].innerHTML;
//       itens[i].classList = '';
//       itens[i].innerHTML = '';
//       itens[i].append(inputEditar);
//     }
//   }
  inputEditar.value = itens[param].innerHTML;
  itens[param].classList = '';
  itens[param].innerHTML = '';
  itens[param].append(inputEditar);
};

const criaBotaoSalvarEdicao = param => {
  let botao = document.createElement('button');
  botao.innerText = 'Salvar';
  botao.classList = 'BotaoEditar';
  botao.addEventListener('click', () => {
    salvarItensEditados(param);
  });
  return botao;
};

const salvarItensEditados = param => {
    console.log(document.getElementById(param).value)
  
//     itens[param].value = "dois"
//   for (let i = 0; i < itens.length; i++) {
//     if (itens[i].value == 'teste 1') {
//       console.log(itens[i].value);
//       itens[i].innerHTML = 'aa';
//       itens[i].replaceWith(item);
//     }
//   }
};

const itemLista = () => {
  let item = document.createElement('li');
  item.classList = 'itemLista';
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
}

// localStorage.clear()
