import {cardContainer, logIn} from "./api/log_in.js";
import filtration from "./filters/filter.js";
import {reset} from "./filters/reset.js";
import {selectedOption} from './functions/modal/select_modal.js'
// import {getDataForm} from "./functions/modal/get_data_form.js"
import {cardsManage} from "./api/get_cards.js";
import {createdButton} from "./functions/util/create_button.js";
// import { closedModalForm } from "./functions/util/exit_button.js"

const sign = document.querySelector('.sign');
const search = document.querySelector(".search");
search.addEventListener('click', filtration);
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', reset);
sign.addEventListener('click', logIn);
dragula([document.querySelector(".card-container")]);
selectedOption();
// getDataForm();
// closedModalForm();

window.addEventListener('load', () => {
    if (localStorage.getItem('token') !== null) {
        cardContainer.innerHTML = '';
        cardsManage();
        createdButton();
        console.log('works')
    }
});

// (() => {
//
//     const forms = document.querySelectorAll('.needs-validation')
//
//
//     Array.from(forms).forEach(form => {
//         form.addEventListener('submit', event => {
//             if (!form.checkValidity()) {
//                 event.preventDefault()
//                 event.stopPropagation()
//             }
//
//             form.classList.add('was-validated')
//         }, false)
//     })
// })()
