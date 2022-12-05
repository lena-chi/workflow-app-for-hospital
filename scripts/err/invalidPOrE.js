export default class InvalidEmailOrPassword extends Error {
    constructor(message) {
        super(message);
        this.name =
            "Error, Invalid email or Password: Sorry but you have to try again entering" +
            " our beautiful site";
    }
}
