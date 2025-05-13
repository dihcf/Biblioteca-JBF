let modalOne = document.getElementById("return")
let modalTwo = document.getElementById("modal-edit")
let devolucao = document.getElementById("devolucao")
let close = document.querySelectorAll(".close-modal")
let search = document.getElementById("input_search")
let data = document.querySelectorAll(".conteinerData")
let count = document.querySelectorAll(".conteinerData").length
let a
let addNome = document.getElementById("add-nome")
let addLivro = document.getElementById("add-livro")
let buttonEdit = document.getElementById("button-d")
let inputDate = document.getElementById("input-d")
let itemSelecionado = null;
let loginArea = document.getElementById("Login")
let buttonLogin = document.getElementById("fichas")
let entrarL = document.getElementById("entrarL")


devolucao.addEventListener("click",() =>{
  modalOne.style.display = "flex"
})

buttonLogin.addEventListener("click", ()=>{
    loginArea.style.display = "flex"
})

close.forEach((teste)=>{
    teste.addEventListener("click", ()=>{
        if(teste.id == "oneC"){
            modalOne.style.display = "none"
        } else if(teste.id == "twoC"){
            modalTwo.style.display = "none"
        } else if(teste.id == "threeC"){
            loginArea.style.display = "none"
        }
    })
    
})
    
search.addEventListener("input",(e)=>{
        let campoE = e.target.value.toLowerCase()   
        for(a=0;a<count;a++){
            let text = document.querySelectorAll(".conteinerData")[a].firstElementChild.textContent.toLowerCase()
            if(text.includes(campoE)){
                let camposData = document.querySelectorAll(".conteinerData")
                camposData[a].style.display = "flex"
            } else {
                let camposData = document.querySelectorAll(".conteinerData")
                camposData[a].style.display = "none"
            }

       }
})   

data.forEach((item) => {
    item.addEventListener("click", () => {
        // Pega os <p> internos
        let textos = item.querySelectorAll("p")
        let nomeAluno = textos[0].textContent
        let nomeLivro = textos[2].textContent

        // Adiciona ao modal
        addNome.textContent = "Aluno: " + nomeAluno
        addLivro.textContent = "Livro: " + nomeLivro
        itemSelecionado = item 
        // Exibe o modal de edição
        modalTwo.style.display = "flex"

    })
})

buttonEdit.addEventListener("click", ()=>{
    if(!itemSelecionado) return;

    let dataSelecionada = inputDate.value

    if (dataSelecionada) {
    let [ano, mes, dia] = dataSelecionada.split("-");
    let dataFormatada = `${dia}/${mes}/${ano}`;

    let parags = itemSelecionado.querySelectorAll("p");
    if (parags.length >= 5) {
      parags[4].textContent = dataFormatada;
    } 
    modalTwo.style.display = "none";
    inputDate.value = ""; // limpa o input
  } else {
    alert("Por favor, selecione uma data.");
  }
})
        
entrarL.addEventListener("click",()=>{
    let campoUser = document.getElementById("User").value
    let campoPass = document.getElementById("Pass").value

    if(campoPass == "Admin" && campoUser == "Admin"){
        window.location.assign("fichas.html")
    } else {
        alert("Usuario ou Senha Incorretos")
    }
})
