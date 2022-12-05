export default function openDialogModal(){
    this.modalDialogDeleteText = document.querySelector('.modal-dialog-delete-text')
    this.modalDialogDeleteText.innerHTML =
        `<p> ${this.name} will not see a ${this.doctor}.<br> Are you sure?</p>`
    this.modalDialogDeleteFooter = document.querySelector('.modal-dialog-delete-footer')
    this.modalDialogDeleteFooter.innerHTML =
        `<button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">CLOSE</button>
    <button type="button" class="btn btn-outline-light dialog-delete"  data-bs-dismiss="modal">I\`m sure, DELETE</button>`
    this.modalDialogDeleteBtn =document.querySelector('.dialog-delete')
    this.modalDialogDeleteBtn.addEventListener('click', this.deleteVisit.bind(this))

}
