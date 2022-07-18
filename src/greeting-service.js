module.exports = class GreetingService {
    #name
    
    constructor(name) {
        this.#name = name
    }
    
    getGreeting() {
        return `Hello ${this.#name}`
    }
}