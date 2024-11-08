describe('Pizza Siparişi Formu Testi', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173');
    });

    it('Ad soyad input alanına metin girilmeli', () => {
        cy.get('[data-cy=input-name]')
            .type('Hediye Ersan')
            .should('have.value', 'Hediye Ersan');
    });
    it('Birden fazla malzeme seçilmeli', () => {

        cy.get('[data-cy=input-pepperoni]').check();
        cy.get('[data-cy=input-sosis]').check();
        cy.get('[data-cy=input-domates]').check();


        cy.get('[data-cy=input-pepperoni]').should('be.checked');
        cy.get('[data-cy=input-sosis]').should('be.checked');
        cy.get('[data-cy=input-domates]').should('be.checked');
    });


    
});