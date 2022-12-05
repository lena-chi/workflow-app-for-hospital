import putEdit from "../../api/put_edit_visit.js";
import deleteVisit from "../../api/delete_card.js";
import openDialogModal from "../../functions/modal/open_dialog_modal.js";



export default class Visit {
    constructor(id, purpose, description, doctor, name, urgency, status ="open", open = openDialogModal,  del = deleteVisit, edit = editVisit){
        this.id = id;
        this.doctor = doctor;
        this.name = name;
        this.purpose = purpose;
        this.description = description;
        this.urgency = urgency;
        this.status = status;
        this.openDialogModal = openDialogModal;
        this.deleteVisit = deleteVisit;
        this.editVisit = editVisit;

        this.cardCol = document.createElement('div');
        this.cardCol.setAttribute('class', 'col');

        this.card = document.createElement('div');
        this.card.setAttribute('class', 'card');
        this.cardBody = document.createElement('div');
        this.cardBody.setAttribute('class', 'card-body');

        this.fullCard = document.createElement('div');
        this.infoPatient = document.createElement('ul')
        this.divButtons = document.createElement('div');
        this.divButtons.setAttribute('class', 'div-buttons')

        this.deleteButton = document.createElement('button');
        this.deleteButton.setAttribute('class', 'btn-close btn-close-white');
        this.deleteButton.setAttribute('type', 'button');
        this.deleteButton.setAttribute('data-bs-toggle', 'modal');
        this.deleteButton.setAttribute('data-bs-target', '#modalDialogDelete');


        this.showMoreButton = document.createElement('button');
        this.showMoreButton.setAttribute('class', 'btn btn-outline-light');
        this.showMoreButton.setAttribute('type', 'button');
        this.showMoreButton.textContent = 'SHOW MORE';

        this.hideButton = document.createElement('button');
        this.hideButton.setAttribute('class', 'btn btn-outline-light');
        this.hideButton.setAttribute('type', 'button');
        this.hideButton.textContent = 'HIDE';
        this.hideButton.style.display = 'none';


        this.editButton = document.createElement('button');
        this.editButton.setAttribute('class', 'btn btn-outline-light');
        this.editButton.setAttribute('type', 'button');
        this.editButton.textContent = 'EDIT';
        this.editButton.setAttribute('data-bs-toggle', 'modal');
        this.editButton.setAttribute('data-bs-target', '#ModalEdit');

        this.deleteButton.addEventListener('click', this.openDialogModal.bind(this));
        this.showMoreButton.addEventListener('click', this.showMore.bind(this));
        this.hideButton.addEventListener('click', this.hide.bind(this));
        this.editButton.addEventListener('click', this.editVisit.bind(this))

    }

    buildingCard(){
        const container = document.querySelector('.card-container')
        container.append(this.cardCol)
        this.cardCol.setAttribute('id',`${this.id}`)
        this.cardCol.append(this.card)
        this.card.append(this.cardBody)
        this.cardBody.prepend(this.deleteButton)
        this.cardBody.insertAdjacentHTML(`beforeend`, `
        <h3 class="card-title">${this.name}</h3>
        <h3 class="card-title">${this.doctor}</h3>`)
        this.cardBody.append(this.fullCard)
        this.cardBody.append(this.divButtons)
        this.divButtons.append(this.editButton)
        this.divButtons.append(this.showMoreButton)
        this.divButtons.append(this.hideButton)
        console.log(this.fullCard)
    }

    showMore(){
        this.fullCard.insertAdjacentHTML('beforeend', `
             <h5 class="card-title">${this.purpose}</h5>
             <p class = "card-text">${this.description}</p>
             <p class = "card-text">${this.urgency}</p>
             <h6 class ="card-title">Additional information about the patient:</h6>
        `)
        this.fullCard.append(this.infoPatient)
        this.showMoreButton.style.display = 'none';
        this.hideButton.style.display = 'block';
    }

    hide(){
        this.fullCard.innerHTML ='';
        this.infoPatient.innerHTML ='';
        this.showMoreButton.style.display = 'block';
        this.hideButton.style.display = 'none';
    }

}




class ModalEdit{
    constructor(id, purpose, description, doctor, name, urgency, status, create = createInputEditModal, put = putEdit ) {
        this.id = id;
        this.purpose = purpose;
        this.description = description;
        this.doctor = doctor;
        this.name = name;
        this.urgency = urgency;
        this.status = status;
        this.createInputEditModal = create;
        this.putEdit = put;
        this.modalEditBody = document.querySelector('.modal-edit-body');
        this.modalEditBody.innerHTML = '';
        this.modalEditBody.classList.remove( 'was-validated');

        this.modalEditFooter = document.querySelector('.modal-edit-footer');
        this.modalEditFooter.innerHTML=
            `<button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">CLOSE</button>
    <button type="button" class="btn btn-outline-light modal-edit-save"  >SAVE</button>`
        this.modalEditSaveBtn = document.querySelector(`.modal-edit-save`)
        this.modalEditSaveBtn.innerText='SAVE'
        this.modalEditSaveBtn.addEventListener('click', this.putEdit.bind(this))


        const arrayDoctor = ['cardiologist', 'therapist', 'dentist' ]
        const delDoctor = arrayDoctor.find((el)=>el === this.doctor)
        const indexDelDoctor = arrayDoctor.indexOf(delDoctor)
        arrayDoctor.splice(indexDelDoctor, 1)
        this.modalEditBody.innerHTML= `
        <select class="form-select  select_doctor_edit form-select select_form" id="select_doctor_" aria-label=".form-select-lg" size="1">
          <option  value="${this.doctor}" selected >${this.doctor}</option>
          <option  value="${arrayDoctor[0]}">${arrayDoctor[0]}</option>
          <option  value="${arrayDoctor[1]}">${arrayDoctor[1]}</option>
        </select>`
        this.selectDoctorEdit = document.querySelector('.select_doctor_edit')
        console.log(this.selectDoctorEdit)
        this.selectDoctorEdit.addEventListener('change',(el)=> {

            console.log(el.target.value);

            switch (el.target.value) {
                case "dentist":

                    new ModalEditDentist(this.id, this.purpose, this.description, this.doctor="dentist", this.name, this.urgency,this.status, this.visit ).buildingModalEditDentist()
                    break;
                case "cardiologist":

                    new ModalEditCardiologist(this.id, this.purpose, this.description, this.doctor="cardiologist", this.name, this.urgency, this.status, this.pressure, this.mass, this.cardio, this.age,).buildingModalEditCardiologist()
                    break;
                case "therapist":

                    new ModalEditTherapist(this.id, this.purpose, this.description, this.doctor="therapist", this.name, this.urgency, this.status, this.age,).buildingModalEditTherapist()
                    break;
                }
        })



    }
    buildingModalEdit(){

        const arrayModalEditOptions = [["purpose visit",this.purpose], ["description problem", this.description], ["name", this.name]]
        this.createInputEditModal(arrayModalEditOptions,this.modalEditBody)

        const arrayUrgency = ['High', 'Normal', 'Low' ]
        const delUrgency = arrayUrgency.find((el)=>el === this.urgency)
        const indexDelUrgency = arrayUrgency.indexOf(delUrgency)
        arrayUrgency.splice(indexDelUrgency, 1)
        console.log(arrayUrgency)
        this.modalEditBody.insertAdjacentHTML('beforeend',
                `<select class="form-select form-select select_form" id ="select_urgency_" aria-label=".form-select-sm urgen">
                         <option class ="select_urgency_input"  value="${this.urgency}" selected>${this.urgency}</option>
                         <option class ="select_urgency_input" value="${arrayUrgency[0]}">${arrayUrgency[0]}</option>
                         <option class ="select_urgency_input" value="${arrayUrgency[1]}">${arrayUrgency[1]}</option>
                      </select>`)


    }


}

class ModalEditCardiologist extends ModalEdit{
    constructor(id, purpose, description, doctor, name, urgency,status, pressure = 'null', mass = 'null', cardio = 'null', age = 'null', ){
        super(id, purpose, description, doctor, name, urgency, status);
        this.pressure = pressure;
        this.mass = mass;
        this.cardio = cardio;
        this.age = age;
      }
    buildingModalEditCardiologist(){
        super.buildingModalEdit()
        const arrayCardiologistOptions = [['pressure', this.pressure], ['mass index', this.mass], ['cardio diseases', this.cardio], ['age', this.age]]
        this.createInputEditModal(arrayCardiologistOptions,this.modalEditBody)
    }



}
class ModalEditDentist extends ModalEdit {
    constructor(id, purpose, description, doctor, name, urgency, status, visit = 'null',){
        super(id, purpose, description, doctor, name, urgency);
        this.visit = visit;
    }
    buildingModalEditDentist(){
        super.buildingModalEdit()
        const arrayDentistOptions = [['visit last date', this.visit]]
        console.log(arrayDentistOptions[1])
        this.createInputEditModal(arrayDentistOptions,this.modalEditBody)

    }



}
class ModalEditTherapist extends ModalEdit {

    constructor(id, purpose, description, doctor, name, urgency,status, age = 'null'){
        super(id, purpose, description, doctor, name, urgency,status);
        this.age = age;
        console.log(this.age)
    }
    buildingModalEditTherapist(){
        super.buildingModalEdit()
        const arrayTherapistOptions = [['age', this.age]]
        console.log(arrayTherapistOptions)
        this.createInputEditModal(arrayTherapistOptions,this.modalEditBody)
    }

}
function editVisit(){

    if(this.doctor.toLowerCase() === 'Cardiologist'.toLowerCase())
    { new ModalEditCardiologist(this.id, this.purpose, this.description, this.doctor, this.name, this.urgency, this.status, this.pressure, this.mass, this.cardio, this.age,).buildingModalEditCardiologist()
    }
    if(this.doctor.toLowerCase() === 'Therapist'.toLowerCase())
    { new ModalEditTherapist(this.id, this.purpose, this.description, this.doctor, this.name, this.urgency, this.status, this.age,).buildingModalEditTherapist()
    }
    if(this.doctor.toLowerCase() === 'Dentist'.toLowerCase())
    { new ModalEditDentist(this.id, this.purpose, this.description, this.doctor, this.name, this.urgency,this.status, this.visit ).buildingModalEditDentist()
    }}







const createInputEditModal = (arrayOptions, inputWrapper) => {

    arrayOptions.forEach(field => {

        if(field[1]!== null && field[1]!=="null"){
            const clientHealthyItem = document.createElement("div")
            clientHealthyItem.classList.add('input-group', 'mb-3')
            clientHealthyItem.insertAdjacentHTML('beforeend', `
      <input  type="text" class="form-control ${field[0]}" placeholder=${field[0]} id="validation${field[0]}" required value="${field[1]}" aria-label="${field[0]}" aria-describedby="basic-addon2"  >
      <span class="input-group-text" id="basic-addon2">${field[0]}</span>
      `)

            inputWrapper.append(clientHealthyItem)


        } else {const clientHealthyItem = document.createElement("div")
            clientHealthyItem.classList.add('input-group', 'mb-3')
            clientHealthyItem.insertAdjacentHTML('beforeend', `
      <input type="text" class="form-control" placeholder=${field[0]} id="validation${field[0]}" required aria-describedby="basic-addon2" aria-label="${field[0]}" >
      <span class="input-group-text" id="basic-addon2">${field[0]}</span>
           
      `)

            inputWrapper.append(clientHealthyItem)

        }

    })

}
