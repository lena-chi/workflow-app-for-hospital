import createCard from "../functions/util/create_card.js";
import {cardContainer} from "../api/log_in.js";

export  function reset() {
    cardContainer.innerHTML = ''
    const data = JSON.parse(localStorage.getItem("data"))
    data.forEach((el)=> createCard(el))
}