export default class ChooseSelect extends Error{
    constructor(message) {
        super(message);
        this.name = 'Error, urgency is not selected'
    }
}