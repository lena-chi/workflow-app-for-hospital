import VisitCardiologist from "../../classes/visits/visit_cardiologist.js";
import VisitTherapist from "../../classes/visits/visit_therapis.js";
import VisitDentist from "../../classes/visits/visit_dentist.js";

export default function createCard(el){
    
    if(el.doctor.toLowerCase() === 'Cardiologist'.toLowerCase())
    {  const {id, purpose, description, doctor, name, urgency, status, pressure, mass, cardio, age,} = el;
        new VisitCardiologist(id, purpose, description, doctor, name, urgency,status, pressure, mass, cardio, age,).buildingCard()
    }
    if(el.doctor.toLowerCase() === 'Therapist'.toLowerCase())
    {  const {id, purpose, description, doctor, name, urgency,status, age,} = el;
        new VisitTherapist(id, purpose, description, doctor, name, urgency,status, age,).buildingCard()
    }
    if(el.doctor.toLowerCase() === 'Dentist'.toLowerCase())
    {   const {id, purpose, description, doctor, name, urgency,status, visit,} = el;
        new VisitDentist(id, purpose, description, doctor, name, urgency,status, visit ).buildingCard()
    }}



