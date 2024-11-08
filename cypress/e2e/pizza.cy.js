describe('Pizza Siparişi Formu Testi', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/orderPizza');
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

    it('Form doğru şekilde gönderilmeli', () => {
        cy.get('[data-cy=input-name]').type('Hediye Ersan'); // Ad-Soyad giriyoruz
        cy.get('[data-cy=input-size-orta]').check();           // Boyut seçiyoruz
        cy.get('[data-cy=input-hamur]').select('Orta');         //Hamur kalınlığı

        //En az 4 malzeme şartı
        cy.get('[data-cy=input-pepperoni]').check();
        cy.get('[data-cy=input-sosis]').check();
        cy.get('[data-cy=input-domates]').check();
        cy.get('[data-cy=input-mısır]').check();

        cy.get('[data-cy="siparis-ver"]').click()

        cy.url().should('include', '/success');
       

    });
    it('Anasayfa butonu doğru bir şekilde çalışmalı.', () => {
        cy.get('[data-cy="anasayfa"]').click()
        cy.url().should('include', '/');
    });
    it('Acıktım butonu doğru bir şekilde çalışmalı', () => {
        cy.visit('http://localhost:5173/')
        cy.get('[data-cy="aciktim"]').click()
        cy.url().should('include', '/orderPizza');
    });

});