// procurar o botão 
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)



// Executar uma ação 
    function cloneField(){
        
        
        // Dupliclar os campos 
        const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

        const fields = newFieldContainer.querySelectorAll('input')
        
        
        fields.forEach(function(field){
            field.value = ""
        })
        // Colocar na página 
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
    }