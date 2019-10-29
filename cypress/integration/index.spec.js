describe('Index', () => {
    it('users should be able to visit the "/" page', () => {
        cy
            .visit('/')
            .get('h1').contains('All Users');
    })
    it('users should be able to visit the "/about" page', () => {
        cy
            .visit('/about')
            .get('h1').contains('About');
    })
});