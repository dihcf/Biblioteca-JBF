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

devolucao.addEventListener("click",() =>{
  modalOne.style.display = "flex"
})


close.forEach((teste)=>{
    teste.addEventListener("click", ()=>{
        if(teste.id == "oneC"){
            modalOne.style.display = "none"
        } else if(teste.id == "twoC"){
            modalTwo.style.display = "none"
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
        
        let textos = item.querySelectorAll("p")
        let nomeAluno = textos[0].textContent
        let nomeLivro = textos[2].textContent

        
        addNome.textContent = "Aluno: " + nomeAluno
        addLivro.textContent = "Livro: " + nomeLivro

       
        modalTwo.style.display = "flex"
    })
})


