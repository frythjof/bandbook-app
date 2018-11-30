describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('has the right title', () => {
    cy.title().should('equal', 'Bandbook')
  })

  describe('HomeBoard', () => {
    it('has three Messages at start', () => {
      cy.get('[data-cy="Message"]').should('have.length', 3)
    })

    it('has a one Separator with Text Joe', () => {
      cy.get('[data-cy="Separator"]')
        .contains('Joe')
        .should('have.length', 1)
    })

    describe('InputWrapper', () => {
      // hinter das describe ".only" schreiben, damit nur der InputWrapper getestet wird.
      it('has an input', () => {
        cy.get('textarea[placeholder="Add your message here ..."]').should(
          'have.length',
          1
        )
      })

      it('has one button', () => {
        cy.get('[data-cy="PostButton"]').should('have.length', 1)
      })
    })
  })

  //   describe('Navigation', () => {
  //     it('has four buttons', () => {
  //       cy.get('nav > a').should('have.length', 4)
  //     })
  //   })
})
