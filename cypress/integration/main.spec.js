describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('has the right title', () => {
    cy.title().should('equal', 'Bandbook')
  })

  describe('HomeBoard', () => {
    it('has seven Messages at start', () => {
      cy.get('[data-cy="Message"]').should('have.length', 7)
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

  describe('SongList', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/repertoire')
      cy.clearLocalStorage()
    })

    it('has ten Songs at start', () => {
      cy.get('[data-cy="SingleSong"]').should('have.length', 10)
    })

    it('has a one Song with the name Song A', () => {
      cy.get('[data-cy="SongCard"]')
        .contains('Song A')
        .should('have.length', 1)
    })

    // it('has one red song name', () => {
    //   cy.get('[data-cy=SongName]')
    //     .should('have.class', 'song-in-progress')
    //     .should('have.length', 1)
    // })

    // describe('InputWrapper', () => {
    //   it('has an input', () => {
    //     cy.get('textarea[placeholder="Add your message here ..."]').should(
    //       'have.length',
    //       1
    //     )
    //   })

    it('has 10 bpm-buttons', () => {
      cy.get('[data-cy="BpmButton"]').should('have.length', 10)
    })
  })

  //   describe('Navigation', () => {
  //     it('has four buttons', () => {
  //       cy.get('nav > a').should('have.length', 4)
  //     })
  //   })
})
