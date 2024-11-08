describe('Pizza Siparişi Formu Testi', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173');
    });

    it('Ad soyad input alanına metin girilmeli', () => {
        cy.get('[data-cy=input-name]')
            .type('Hediye Ersan')
            .should('have.value', 'Hediye Ersan');
    });

    
});