const el = require('./elements').ELEMENTS

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('homeUrl', () => {
    cy.visit('/',{"failOnStatusCode": false})
})

Cypress.Commands.add('validaElementos', () => {
    cy.get(el.lupaBusca, {timeout: 10000}).should('be.visible')
    cy.get(el.logotipo).should('be.visible')
    cy.get(el.menuSocial).should('be.visible').and('have.length', 3)
    cy.get(el.menu).should('be.visible').and('have.length', 8)
})

Cypress.Commands.add('abrirInputBusca', () => {
    cy.get(el.lupaBusca).click()
    cy.get(el.buscaDesktop).should('be.visible')
    cy.get(el.inputBuscaDesktop).should('be.visible')
    cy.get(el.buscaDesktopSubmit).should('be.visible')
})

Cypress.Commands.add('buscaTermo', (busca) => {
    cy.get(el.inputBuscaDesktop).type(busca)
    cy.get(el.buscaDesktopSubmit).click()
})

Cypress.Commands.add('resultadoBusca', (resultado) => {
    cy.url().should('include', `?s=${resultado}`)
    cy.get(el.labelResultado).contains(resultado)
    cy.get(el.listaArtigos).should('have.length.at.least', 1)
})

Cypress.Commands.add('semResutado', (resultado) => {
    cy.url().should('include', `?s=${resultado}`)
    cy.get(el.tituloSemResultado).contains("Nenhum resultado")
})

Cypress.Commands.add('resultadoMensagem', (mensagem) => {
    cy.contains(mensagem).should('be.visible')
})