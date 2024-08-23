describe('Testando múltiplas páginas', () => {
  it('Deve conseguir acessar a página de cartões', () => {
    cy.visit('/')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    cy.location('pathname').should('eq','/home')

    //catoes
    cy.getByData('app-home').find('a').eq(1).click()
    cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')
    cy.location('pathname').should('eq','/home/cartoes')

    //serviços
    cy.getByData('app-home').find('a').eq(2).click()
    cy.location('pathname').should('eq','/home/servicos')

    //investimentos
    cy.getByData('app-home').find('a').eq(3).click()
    cy.getByData('titulo-investimentos').should('exist').and('have.text', 'Investimentos')
    cy.location('pathname').should('eq','/home/investimentos')
  })
})