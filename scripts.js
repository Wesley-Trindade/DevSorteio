const buttonSortear  = document.querySelector(".button__sortear")



   function sorteador(){
      const inputMim = Math.ceil(document.querySelector(".input__min").value)
      const inputMax = Math.floor(document.querySelector(".input__max").value)
      const result = Math.floor(Math.random() * (inputMax - inputMim + 1) + inputMim);

     

  
     
   

      
      

}














buttonSortear.addEventListener("click", sorteador)