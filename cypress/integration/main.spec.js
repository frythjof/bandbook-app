describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('has the right title', () => {
    cy.title().should('equal', 'Bandbook')
  })

  it('has an input', () => {
    cy.get('textarea[placeholder="Write new message here"]').should(
      'have.length',
      1
    )
  })

  it('has a Separator with Text Joe', () => {
    cy.get('[data-cy="Separator"]')
      .contains('Joe')
      .should('have.length', 1)
  })

  describe('Message', () => {
    // hinter das describe ".only" schreiben, damit nur nach Messsages gesucht wird.
    it('has three message at start', () => {
      cy.get('[data-cy="Message"]').should('have.length', 3)
    })
  })

  //   describe('Navigation', () => {
  //     it('has four buttons', () => {
  //       cy.get('nav > a').should('have.length', 4)
  //     })
  //   })
})
