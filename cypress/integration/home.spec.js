describe('Validar as regras de negócio da página Home', () => {
    beforeEach(() => {
        cy.homeUrl()
        cy.validaElementos()        
    })
    it('Realizar uma busca de um termo com sucesso', () => {
        const busca = 'qualidade'
        cy.abrirInputBusca()
        cy.buscaTermo(busca)
        cy.resultadoBusca(busca)
    })
    it('Realizar uma busca de um termo não encontrado', () => {
        const busca = '***'
        const mensagem = "Não encontramos nada para estes termos de busca. Tente novamente com palavras-chave diferentes."
        
        cy.abrirInputBusca()
        cy.buscaTermo(busca)
        cy.semResutado(busca)
        cy.resultadoMensagem(mensagem)
    })
})