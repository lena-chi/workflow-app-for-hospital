import {cardContainer} from "./log_in.js";
import createCard from "../functions/util/create_card.js";
import EmptyInput from "../err/emptyInput.js";

export default function putEdit(){

    (( )=> {
        console.log(this.modalEditBody.checkValidity())
        //
        // if(this.modalEditBody.checkValidity()){
        //
        //    throw new EmptyInput
        // }
        this.modalEditBody.classList.add('was-validated'),false
    })()


    const doctor = document.getElementById('select_doctor_')
    const selectDoctor = doctor.value;

    const body = document.querySelector(".modal-edit-body")
    const inputList = [...body.querySelectorAll('input')]
    console.log(inputList)

const arr = inputList.map(el=>
{
    return el.value
}
    )
console.log(arr)
    const arrEmp = arr.filter(el => el === "")
console.log(arrEmp)
    if(arrEmp.length === 0){

        console.log(this.modalEditSaveBtn)
        this.modalEditSaveBtn.setAttribute('data-bs-dismiss', 'modal');
        (()=>{this.modalEditSaveBtn.click()})()

    } else {
        console.log('EMPTYYY')
        throw new EmptyInput

    }




    const urg = document.getElementById('select_urgency_')
    const selectUrg = urg.value;
    console.log(typeof this.id)
    console.log(typeof inputList[0].value)
    console.log(typeof selectUrg)
    if(selectDoctor === 'dentist'){
        const token = localStorage.getItem('token')
        fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                id: this.id,
                name:inputList[2].value,
                purpose: inputList[0].value,
                description: inputList[1].value,
                doctor: selectDoctor,
                urgency: selectUrg,
                visit: inputList[3].value,
                status: this.status,
            })
        })
            .then(response => response.json())

            .then(response => {
                if('200'){

                    const dataLocalStorage = JSON.parse(localStorage.getItem('data'))
                    const delObj = dataLocalStorage.find(({id})=>id === this.id)
                    const indexDelObj = dataLocalStorage.indexOf(delObj)
                    dataLocalStorage.splice(indexDelObj, 1);
                    dataLocalStorage.unshift(response)
                    cardContainer.innerHTML=''
                    dataLocalStorage.forEach(el=>{
                        createCard(el)
                    })

                    localStorage.setItem('data', JSON.stringify(dataLocalStorage))
                    console.log(dataLocalStorage)

                }
            })}

    if(selectDoctor === 'therapist'){
        const token = localStorage.getItem('token')
        fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                id: this.id,
                name:inputList[2].value,
                purpose: inputList[0].value,
                description: inputList[1].value,
                doctor: selectDoctor,
                urgency: selectUrg,
                age: inputList[3].value,
                status: this.status,
            })
        })
            .then(response => response.json())
            // .then(response => console.log(response))

            .then(response => {
                if('200'){

                    const dataLocalStorage = JSON.parse(localStorage.getItem('data'))
                    const delObj = dataLocalStorage.find(({id})=>id === this.id)
                    const indexDelObj = dataLocalStorage.indexOf(delObj)
                    dataLocalStorage.splice(indexDelObj, 1);
                    dataLocalStorage.unshift(response)
                    cardContainer.innerHTML=''
                    dataLocalStorage.forEach(el=>{
                        createCard(el)
                    })
                    localStorage.setItem('data', JSON.stringify(dataLocalStorage))
                    console.log(dataLocalStorage)


                }
            })
    }

    if(selectDoctor === 'cardiologist'){
        const token = localStorage.getItem('token')
        fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                id: this.id,
                name:inputList[2].value,
                purpose: inputList[0].value,
                description: inputList[1].value,
                doctor: selectDoctor,
                urgency: selectUrg,
                mass: inputList[3].value,
                cardio: inputList[4].value,
                pressure: inputList[5].value,
                age: inputList[6].value,
                status: this.status,
            })
        })
            .then(response => response.json())

            .then(response => {
                if('200'){

                    const dataLocalStorage = JSON.parse(localStorage.getItem('data'))
                    const delObj = dataLocalStorage.find(({id})=>id === this.id)
                    const indexDelObj = dataLocalStorage.indexOf(delObj)
                    dataLocalStorage.splice(indexDelObj, 1);
                    dataLocalStorage.unshift(response)
                    cardContainer.innerHTML=''
                    dataLocalStorage.forEach(el=>{
                        createCard(el)
                    })
                    localStorage.setItem('data', JSON.stringify(dataLocalStorage))
                    console.log(dataLocalStorage)

                }
            })
    }


}