import Visit from "./visit.js"
export default class VisitCardiologist extends Visit {
    constructor(id, purpose, description, doctor, name, urgency,status, pressure, mass, cardio, age, ){
        super(id, purpose, description, doctor, name, urgency);
        this.pressure = pressure;
        this.mass = mass;
        this.cardio = cardio;
        this.age = age;
    }

    showMore(){
        super.showMore();
        this.infoPatient.insertAdjacentHTML('beforeend', `
        <li class="card-text">${this.pressure}</li>
        <li class="card-text">${this.mass}</li>
        <li class="card-text">${this.cardio}</li>
        <li class="card-text">${this.age}</li>`)
    }
}