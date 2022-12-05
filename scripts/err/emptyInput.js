export default class EmptyInput extends Error{
    constructor(message) {
        super(message);
        this.name = 'Error, Empty Input: Seems like you left one or both inputs empty,' +
            ' try entering those again:)'
    }
}