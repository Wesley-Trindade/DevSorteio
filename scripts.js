const buttonSortear  = document.querySelector(".button__sortear")
// const valueResult = document.querySelector(".drawn")




   function sorteador(){
      const inputMim = Math.ceil(document.querySelector(".input__min").value)
      const inputMax = Math.floor(document.querySelector(".input__max").value)
      const valueResult = document.querySelector(".drawn")
      const caixaBox = document.querySelector(".value__drawn")
      
      
      const result = Math.floor(Math.random() * (inputMax - inputMim + 1) + inputMim); 
      
      

       valueResult.innerHTML = result

       caixaBox.style.display = 'block';


      

    

}


















buttonSortear.addEventListener("click", sorteador)