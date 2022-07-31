const GreetingService = require('../greeting-service.js');

describe('GreetingService', () => {
	it('should great pearson by name', () => {
		const greetingService = new GreetingService('Bob')

		const greeting = greetingService.getGreeting()

		expect(greeting).toEqual('Hello Bob');
	})
})