//validação input
const labelNome = document.querySelector("#labelNome");
const inputNome = document.querySelector("#nome");

const labelDescricao = document.querySelector("#labelDescricao");
const inputDescricao = document.querySelector("#descricao");

const labelEstilo = document.querySelector("#labelEstilo");
const inputEstilo = document.querySelector("#estilo");

const labelImagem = document.querySelector("#labelImagem");
const inputImagem = document.querySelector("#imagem");

const button = document.querySelector("#btnCadastrar");

const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");

// const closeModal = document.querySelector(".close");
// const h3 = document.querySelector("#msgText");
// const modal = document.querySelector(".modal-container");

// btnCadastrar.addEventListener("click", () => {
//     if (user.value === "" || pass.value === "") {
//       h3.textContent = "Preencha todos os campos!";
//       modal.style.display = "flex";
//     } else {
//       h3.textContent = "Login efetuado com sucesso!";
//       modal.style.display = "flex";
//     }
//   });
//   // Fechando (ocultando) o modal com a mudança do display para none
//   closeModal.addEventListener("click", () => {
//     modal.style.display = "none";
//   });
  

//valida campos

inputNome.addEventListener("keyup", ()=>{
    if(inputNome.value.length < 3){
        labelNome.innerText = "Nome: (Digite um nome válido)";
        labelNome.style.color = "red";
    }else{
        labelNome.innerText = "Nome:";
        labelNome.style.color = "rgb(114, 112, 112)";
    }
});

inputDescricao.addEventListener("keyup", ()=>{
    if(inputDescricao.value.length < 15){
        labelDescricao.innerText = "Descrição: (Digite uma descrição válida)";
        labelDescricao.style.color = "red";
    }else{
        labelDescricao.innerText = "Descrição:";
        labelDescricao.style.color = "rgb(114, 112, 112)";
    }
});

inputEstilo.addEventListener("keyup", ()=>{
    if(inputEstilo.value.length < 3){
        labelEstilo.innerText = "Estilo: (Digite um estilo válido)";
        labelEstilo.style.color = "red";
    }else{
        labelEstilo.innerText = "Estilo:";
        labelEstilo.style.color = "rgb(114, 112, 112)";
    }
});

inputImagem.addEventListener("keyup", ()=>{
    if(inputImagem.value.length < 5){
        labelImagem.innerText = "Imagem: (Add um Link válido)";
        labelImagem.style.color = "red";
    }else{
        labelImagem.innerText = "Imagem:";
        labelImagem.style.color = "rgb(114, 112, 112)";
    }
});

//message
closeMessage.addEventListener("click", () =>{
    message.style.display = "none";
});

setTimeout(() => {
    message.style.display = "none";
}, 5000);
