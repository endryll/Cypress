describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
    cy.getByData('texto01').contains('Vantagens do nosso banco:')
  })
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.getByData('texto02').contains('Conta e cartão gratuitos')
    cy.getByData('texto03').contains('Saques sem custo')
    cy.getByData('texto04').contains('Programa de pontos')
    cy.getByData('texto05').contains('Seguro Dispositivos')
  })
  it('Deve renderizar p com o texto correto!', () => {
    cy.getByData('paragrafo01').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
    cy.getByData('paragrafo02').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
    cy.getByData('paragrafo03').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
    cy.getByData('paragrafo04').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
  it('Deve renderizar img com uma imagen', () => {
    cy.getByData('imagem').should('be.visible')
  })
})