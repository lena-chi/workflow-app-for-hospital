export const clearForm = () => {

    const form = document.querySelector(".create_form")
    const inputList = form.querySelectorAll('input')
    const selectList = form.querySelectorAll("select")

    form.innerHTML = ""
    // inputList.forEach(input => {
    //     input.value = ''
    // })
    
    selectList.forEach(select => {
       
        select.options[0].selected = true;
    })
   
}