import Visit from './visit.js'
export default class VisitDentist extends Visit {
    constructor(id, purpose, description, doctor, name, urgency, status, visit,){
        super(id, purpose, description, doctor, name, urgency);
        this.visit = visit;
    }
    showMore(){
        super.showMore();
        this.infoPatient.insertAdjacentHTML('beforeend', `
            <li class="card-text">${this.visit}</li>`)
    }


}