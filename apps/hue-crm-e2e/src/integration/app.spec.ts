import {getGreeting} from '../support/app.po';

describe('hue-crm', () => {
	beforeEach(() => cy.visit('/'));
	
	it('should display welcome message', () => {
		getGreeting().contains('Welcome to hue-crm!');
	});
});
