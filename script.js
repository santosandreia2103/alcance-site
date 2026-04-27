// LOADING
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 1500);
};

// ABRIR MODAL
function abrirCadastro(){
  document.getElementById("modal").style.display = "flex";
}

// IR PARA PLANOS
function irPlanos(){
  document.getElementById("modal").style.display = "none";
  trocarTela("planos");
}

// TROCAR TELA
function trocarTela(id){
  document.querySelectorAll(".tela").forEach(t => t.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// ESCOLHER PLANO
function escolherPlano(plano){
  localStorage.setItem("plano", plano);
  trocarTela("dashboard");
  carregarProdutos();
}

// POSTAR PRODUTO
function postar(){
  let nome = document.getElementById("nome").value;
  let desc = document.getElementById("desc").value;

  if(nome === "" || desc === ""){
    alert("Preencha tudo");
    return;
  }

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  produtos.push({nome, desc});

  localStorage.setItem("produtos", JSON.stringify(produtos));

  document.getElementById("nome").value = "";
  document.getElementById("desc").value = "";

  carregarProdutos();
}

// CARREGAR PRODUTOS
function carregarProdutos(){
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  produtos.forEach(p => {
    lista.innerHTML += `
      <div class="produto">
        <strong>${p.nome}</strong>
        <p>${p.desc}</p>
      </div>
    `;
  });
}
