import createCard from "../functions/util/create_card.js";
import {cardContainer} from "./log_in.js";

export function cardsManage() {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            if (data.length > 0){
                 data.forEach((el)=> createCard(el))
            }else{
                    cardContainer.insertAdjacentHTML('afterbegin',`
                    <div class="container">
                    <div class="animate one">
                    <span>N</span><span>o</span>&nbsp;<span>c</span><span>a</span><span>r</span><span>d</span><span>s</span>&nbsp;<span>t
                </span><span>o</span>&nbsp;<span>s</span><span>h</span><span>o
                </span><span>w
                </span><span>!</span>
                </div></div>`)

            }
            localStorage.removeItem("data");

            localStorage.setItem("data", JSON.stringify(data));
        });
}

