// LOADING
window.onload = () => {
  setTimeout(()=>{
    document.getElementById("loading").style.display="none";
  },1500);
};

// TROCAR TELA
function trocarTela(id){
  document.querySelectorAll(".tela").forEach(t=>{
    t.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
}

// MODAL
function abrirCadastro(){
  document.getElementById("modal").style.display="flex";
}

function irPlanos(){
  document.getElementById("modal").style.display="none";
  trocarTela("planos");
}

// DADOS
let plano = "";
let posts = JSON.parse(localStorage.getItem("posts")) || [];

// ESCOLHER PLANO
function escolherPlano(p){
  plano = p;
  trocarTela("dashboard");
  atualizar();
}

// POSTAR PRODUTO
function postar(){
  let nome = document.getElementById("nome").value;
  let desc = document.getElementById("desc").value;

  if(plano === "gratis" && posts.length >= 1){
    alert("Plano grátis permite apenas 1 produto!");
    return;
  }

  let produto = {nome, desc};

  posts.push(produto);

  localStorage.setItem("posts", JSON.stringify(posts));

  atualizar();
}

// ATUALIZAR LISTA
function atualizar(){
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  posts.forEach(p=>{
    lista.innerHTML += `
      <div class="card">
        <h3>${p.nome}</h3>
        <p>${p.desc}</p>
      </div>
    `;
  });
}

// FECHAR MODAL
window.onclick = function(e){
  if(e.target.classList.contains("modal")){
    e.target.style.display="none";
  }
}
