// //validação input
// const labelNome = document.querySelector("#labelNome");
// const inputNome = document.querySelector("#nome");

// const labelDescricao = document.querySelector("#labelDescricao");
// const inputDescricao = document.querySelector("#descricao");

// const labelEstilo = document.querySelector("#labelEstilo");
// const inputEstilo = document.querySelector("#estilo");

// const labelImagem = document.querySelector("#labelImagem");
// const inputImagem = document.querySelector("#imagem");

// const button = document.querySelector("#btnCadastrar");

// inputNome.addEventListener("keyup", ()=>{
//     if(inputNome.value.length < 3){
//         labelNome.innerText = "Nome: (Digite um nome válido)";
//         labelNome.style.color = "red";
//     }else{
//         labelNome.innerText = "Nome:";
//         labelNome.style.color = "rgb(114, 112, 112)";
//     }
// });

// inputDescricao.addEventListener("keyup", ()=>{
//     if(inputDescricao.value.length < 15){
//         labelDescricao.innerText = "Descrição: (Digite uma descrição válida)";
//         labelDescricao.style.color = "red";
//     }else{
//         labelDescricao.innerText = "Descrição:";
//         labelDescricao.style.color = "rgb(114, 112, 112)";
//     }
// });

// inputEstilo.addEventListener("keyup", ()=>{
//     if(inputEstilo.value.length < 3){
//         labelEstilo.innerText = "Estilo: (Digite um estilo válido)";
//         labelEstilo.style.color = "red";
//     }else{
//         labelEstilo.innerText = "Estilo:";
//         labelEstilo.style.color = "rgb(114, 112, 112)";
//     }
// });

// inputImagem.addEventListener("keyup", ()=>{
//     if(inputImagem.value.length < 5){
//         labelImagem.innerText = "Imagem: (Add um Link válido)";
//         labelImagem.style.color = "red";
//     }else{
//         labelImagem.innerText = "Imagem:";
//         labelImagem.style.color = "rgb(114, 112, 112)";
//     }
// });

const closeAlert = () => {
  const close = document.querySelector("#close-message");
  const message = document.querySelector(".message");

  close.addEventListener("click", () => {
    message.style.display = "none";
  });

  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
};

closeAlert();
