
import {testModal} from "../../classes/class_modal/form_class_modal.js"

export const selectedOption = () => {
    const selectModal = document.querySelector(".select_doctor")
    
    selectModal.addEventListener("change", (e) => {

        const clearMod = document.querySelector(".client-healthy")

        if (clearMod !== null) {
            testModal.clearForm()
        }

        const dentistArray = ['visit last date']
        const therapistArray = ["age"]
        const cardioArray = ['pressure', 'mass index', 'cardio diseases', 'age']
        const arrayHealthyOptions = ["purpose visit", "description problem", "name"]

        switch (e.target.value) {
            case "dentist": testModal.createDentistInstance(arrayHealthyOptions, dentistArray)
                break;
            case "cardiologist": testModal.createCardiologistInstance(arrayHealthyOptions, cardioArray)
                break;
            case "therapist": testModal.createTherapistInstance(arrayHealthyOptions, therapistArray)
                break;
            default: console.log("value not selected");
                break;
        }

    })
}