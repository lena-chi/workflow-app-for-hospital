import Modal from "./main_class_modal.js"
export default class LoginModal extends Modal {
    constructor(id, title, Accept, Cancel){
        super(id, title, Accept, Cancel)
        
        this.emailField = document.createElement("div")
        this.passwordField = document.createElement("div")
    }

    createElements(container) {        
        super.createElements(container)
        this.modalContent.classList.add("modal_content")
        this.emailField.classList.add("input-group", "input-group-sm", "mb-3")
        this.passwordField.classList.add("input-group", "input-group-sm", "mb-3")
        this.emailField.insertAdjacentHTML("afterbegin", `
        <span class="input-group-text" id="inputGroup-sizing-sm">Email</span>
        <input
                type="text"
                class="form-control emailInp"
                aria-label="Sizing emailInp input"
                aria-describedby="inputGroup-sizing-sm"
        />
        `)
        this.passwordField.insertAdjacentHTML("afterbegin", `
        <span class="input-group-text" id="inputGroup-sizing-sm">Password</span>
        <input
                type="text"
                class="form-control passwordInp"
                aria-label="Sizing passwordInp input"
                aria-describedby="inputGroup-sizing-sm"
        />
        `)

        this.modalBody.append(this.emailField)
        this.modalBody.append(this.passwordField)
        this.buttonAccept.classList.add("sign")
        }
       
}

const btnLogin = new LoginModal("1", "User login", "Sign in", "Cancel").createElements(document.querySelector(".modal_wrapper"))