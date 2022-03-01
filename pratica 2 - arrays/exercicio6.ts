const usuarios = [
  { nome: 'Diego', idade: 23, ativo: true },
  { nome: 'Gabriel', idade: 15, ativo: false },
  { nome: 'Lucas', idade: 30, ativo: false },
];

const usuariosAtivos = usuarios.filter((obj) => (obj.ativo ? true : false));
const usuariosInativos = usuarios.filter((obj) => (obj.ativo ? false : true));
