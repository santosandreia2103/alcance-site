// LOADING
window.onload = function(){
  document.getElementById("loading").style.display = "none";
  mostrarProdutos();
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

// TROCAR TELAS
function trocarTela(id){
  let telas = document.querySelectorAll(".tela");

  telas.forEach(function(t){
    t.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
}

// ESCOLHER PLANO
function escolherPlano(plano){
  localStorage.setItem("plano", plano);
  trocarTela("dashboard");
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

  produtos.push({nome: nome, desc: desc});

  localStorage.setItem("produtos", JSON.stringify(produtos));

  document.getElementById("nome").value = "";
  document.getElementById("desc").value = "";

  mostrarProdutos();
}

// MOSTRAR PRODUTOS
function mostrarProdutos(){
  let lista = document.getElementById("lista");

  if(!lista) return;

  lista.innerHTML = "";

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  produtos.forEach(function(p){
    lista.innerHTML += `
      <div style="background:#eee; margin:10px; padding:10px;">
        <strong>${p.nome}</strong>
        <p>${p.desc}</p>
      </div>
    `;
  });
}
