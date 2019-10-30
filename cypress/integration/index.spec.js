describe('Index', () => {
    it('should display the page correctly if a user is not logged in', () => {
        cy
            .visit('/')
            .get('h1').contains('All Users')
            .get('a').contains('User Status').should('not.be.visible')
            .get('a').contains('Log Out').should('not.be.visible')
            .get('a').contains('Register')
            .get('a').contains('Log In');
    });
    it('users should be able to visit the "/about" page', () => {
        cy
            .visit('/about')
            .get('h1').contains('About');
    });
});