import { getDataForm } from "../../functions/modal/get_data_form.js"
import Modal from "./main_class_modal.js"

export default class CreateModal extends Modal {
  constructor(idButton, title, Accept, Cancel, submitAction) {
    super(idButton, title, Accept, Cancel)
    this.selectDoctors = document.createElement("select")
    this.clientHealthy = document.createElement("form")
    this.submitAction = submitAction    

  }

  createElements(container) {
    super.createElements(container)
    this.modalElement.classList.add("modal_form")
    this.modalBody.classList.add("create_form")
    this.clientHealthy.classList.add("needs-validation")
    this.clientHealthy.remove( 'was-validated');
    this.selectDoctors.classList.add("form-select", "select_doctor", "select_form")
    this.selectDoctors.setAttribute("aria-label", "form-select-lg")
    this.selectDoctors.setAttribute("size", "1")
    this.selectDoctors.setAttribute("required", "")
    this.selectDoctors.insertAdjacentHTML("afterbegin", `
      
        <option selected disabled value="">select doctor</option>
        <option value="cardiologist">Cardiologist</option>
        <option value="dentist">Dentist</option>
        <option value="therapist">Therapist</option>
   
        `)

    this.buttonAccept.classList.add("submit")
    this.buttonAccept.addEventListener('click', this.submitAction.bind(this));
    this.buttonCancel.addEventListener('click', this.exitModal.bind(this));

    this.modalBody.append(this.selectDoctors)
  }

  createInput = (arrayOptions) => {

    arrayOptions.forEach(field => {
      const clientHealthyItem = document.createElement("div")
      clientHealthyItem.classList.add('input-group', 'mb-3')
      clientHealthyItem.insertAdjacentHTML('beforeend', `
        <input type="text" class="form-control" placeholder=${field} aria-label=${field} aria-describedby="basic-addon2" required>
        <span class="input-group-text" id="basic-addon2">${field}</span>
        
        `)

      this.clientHealthy.append(clientHealthyItem)
    })
  }

  basicModalInstance(arrayHealthyOptions) {

    this.clientHealthy.classList.add("client-healthy") 
    this.clientHealthy.setAttribute("novalidate", "") 

    this.createInput(arrayHealthyOptions)

    this.clientHealthy.insertAdjacentHTML("beforeend", `
     <select class="form-select select_form select_urgency" aria-label="form-select-sm urgen" required>
     <option selected disabled value="">urgency</option>
     <option value="High">High</option>
     <option value="Normal">Normal</option>
     <option value="Low">Low</option>
     </select> 
     <div class="invalid-feedback">
     Please choose an urgency.
   </div>
     `)

    this.modalBody.append(this.clientHealthy)
  }

  createDentistInstance(arrayHealthyOptions, dentistArray) {
    this.basicModalInstance(arrayHealthyOptions)
    this.createInput(dentistArray)
  }

  createCardiologistInstance = (arrayHealthyOptions, cardioArray) => {

    this.basicModalInstance(arrayHealthyOptions)
    this.createInput(cardioArray)
  }

  createTherapistInstance(arrayHealthyOptions, therapistArray) {

    this.basicModalInstance(arrayHealthyOptions)
    this.createInput(therapistArray)
  }

 exitModal(){
  this.selectDoctors.options[0].selected = true;
  this.clientHealthy.innerHTML = "";
  this.modalBody.classList.remove('was-validated');
 }

  clearForm() {

    this.clientHealthy.innerHTML = ""
  }

}

const container = document.querySelector(".modal_form_wrapper")
const testModal = new CreateModal("2", "Create form", "Create", "Exit", getDataForm)
const formModal = testModal.createElements(container)

export { formModal, testModal }



