import { formModal } from "../../classes/class_modal/form_class_modal.js";

export const createdButton = () => {

    const buttonCreate = document.getElementById("signIn")

    buttonCreate.setAttribute("data-bs-target", "#Modal2")
    buttonCreate.setAttribute("type", "button")

    buttonCreate.innerText = "Create card";
    buttonCreate.addEventListener("click", () => {
        formModal
       
      
    })
}
