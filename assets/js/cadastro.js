// // Alterna visibilidade entre login e cadastro
// function mostrarFormulario(tipo) {
//   const loginForm = document.getElementById("form-login");
//   const cadastroForm = document.getElementById("form-cadastro");

//   if (tipo === "login") {
//     loginForm.classList.remove("hidden");
//     cadastroForm.classList.add("hidden");
//   } else {
//     cadastroForm.classList.remove("hidden");
//     loginForm.classList.add("hidden");
//   }
// }

// // Cadastro de novo usuário
// function cadastrarUsuario(event) {
//   event.preventDefault();

//   const nome = document.getElementById("cad-nome").value.trim();
//   const email = document.getElementById("cad-email").value.trim();
//   const nascimento = document.getElementById("cad-nascimento").value;
//   const usuario = document.getElementById("cad-usuario").value.trim();
//   const senha = document.getElementById("cad-senha").value;

//   if (!nome || !email || !nascimento || !usuario || !senha) {
//     alert("Preencha todos os campos.");
//     return;
//   }

//   if (!email.includes("@") || !email.includes(".")) {
//     alert("E-mail inválido.");
//     return;
//   }

//   if (localStorage.getItem(usuario)) {
//     alert("Usuário já cadastrado.");
//     return;
//   }

//   const novoUsuario = { nome, email, nascimento, usuario, senha };
//   localStorage.setItem(usuario, JSON.stringify(novoUsuario));

//   alert("Cadastro realizado com sucesso!");
//   mostrarFormulario("login");
// }

// // Login do usuário
// function loginUsuario(event) {
//   event.preventDefault();

//   const usuario = document.getElementById("login-usuario").value.trim();
//   const senha = document.getElementById("login-senha").value;

//   const dados = localStorage.getItem(usuario);

//   if (!dados) {
//     alert("Usuário não encontrado.");
//     return;
//   }

//   const usuarioDados = JSON.parse(dados);

//   if (usuarioDados.senha !== senha) {
//     alert("Senha incorreta.");
//     return;
//   }

//   document.getElementById("nome-usuario").textContent = usuarioDados.nome;
//   document.getElementById("tela-autenticacao").style.display = "none";
// }

// // Adiciona os eventos após carregar o DOM
// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("form-login").addEventListener("submit", loginUsuario);
//   document.getElementById("form-cadastro").addEventListener("submit", cadastrarUsuario);

//   document.getElementById("btn-login").addEventListener("click", () => mostrarFormulario("login"));
//   document.getElementById("btn-cadastro").addEventListener("click", () => mostrarFormulario("cadastro"));
// });
