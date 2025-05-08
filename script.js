let modalOne = document.getElementById("return")
let Devolucao = document.getElementById("devolucao")
let close = document.getElementById("close-modal")
let search = document.getElementById("input_search")
let a
 
let count = document.querySelectorAll(".conteinerData").length

devolucao.addEventListener("click",() =>{
  modalOne.style.display = "flex"
})

close.addEventListener("click",()=>{
    modalOne.style.display = "none"
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

