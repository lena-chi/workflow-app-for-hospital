import { clearForm } from "../functions/util/clear_form.js"
import createCard from "../functions/util/create_card.js"
import {testModal} from "../classes/class_modal/form_class_modal.js"
import {cardsManage} from "./get_cards.js"

const form = document.querySelector(".create_form")
export const createReqestModal = (requestObject) => {
  const token = localStorage.getItem("token")
  fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },

    body: JSON.stringify(requestObject)
  })
    .then(response => {
      if (response.status === 200) {
        return response.json()

      } else {
        throw new Error(response.status)
      }
    })
    .then(response => {

      testModal.exitModal()
    

      const dataItem = JSON.parse(localStorage.getItem("data"))
      dataItem.push(response)
      localStorage.setItem("data", JSON.stringify(dataItem))

      
      cardsManage()
      
      return response
    }).catch(err => {
      console.error(err)
    })
}



