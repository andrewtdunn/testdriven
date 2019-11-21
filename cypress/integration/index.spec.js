describe('Index', () => {
    it('should display the page correctly if a user is not logged in', () => {
        cy
            .visit('/')
            .get('.navbar-burger').click()
            .get('a').contains('User Status').should('not.be.visible')
            .get('a').contains('Log Out').should('not.be.visible')
            .get('a').contains('Register')
            .get('a').contains('Log In')
            .get('a').contains('Swagger')
            .get('span').contains('Copyright 2019 TestDriven.io')
            .get('.notification.is-success').should('not.be.visible');
    });
    it('users should be able to visit the "/about" page', () => {
        cy
            .visit('/about')
            .get('h1').contains('About');
    });
});