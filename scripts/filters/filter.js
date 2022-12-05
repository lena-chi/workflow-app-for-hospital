
import {cardContainer} from "../api/log_in.js";
import createCard from "../functions/util/create_card.js";

const urgencyInp = document.querySelector(".urgency");

const statusInp = document.querySelector(".status");

const textSearch = document.querySelector(".textSearch");

export const doctorType = document.querySelector(".doctorType");
export default function filtration() {
    const data = JSON.parse(localStorage.getItem("data"));
    const filterd = data.filter((el) => {
        if (
            (statusInp.value === "" && urgencyInp.value === "") ||
            (el.status === statusInp.value.toLowerCase() &&
                el.urgency.toLowerCase() === urgencyInp.value.toLowerCase()) ||
            (statusInp.value === "" &&
                el.urgency.toLowerCase() === urgencyInp.value.toLowerCase()) ||
            (urgencyInp.value === "" &&
                el.status === statusInp.value.toLowerCase())

        ) {
            if (textSearch.value === "") {
                return el;
            } else if (textSearch) {
                if (
                    el.name === textSearch.value ||
                    el.description ===textSearch.value
                ) {
                    return el;
                }
            }
        }
        if (textSearch && statusInp.value === "" && urgencyInp.value === "") {
            if ((el.name === textSearch.value) ||
                (el.description === textSearch.value) ||
                (el.name.includes(textSearch.value) ||
                    el.description.includes(textSearch.value)))
            {
                return el;
            }
        }
    });
    console.log(filterd);

    cardContainer.innerHTML = "";
    if (filterd.length === 0) {
        cardContainer.insertAdjacentHTML("afterbegin", `
        <h5 class="defText">There are no such cards</h5>
        `)
    }
    filterd.forEach((el) => createCard(el))
}
