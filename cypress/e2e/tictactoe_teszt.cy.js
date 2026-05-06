describe('tictactoe_teszteles', () => {
  it('1) oldal_letezik', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
  })

  it('2) van_9_div', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
    cy.get('.jatekter').find('.elem').should('have.length', 9)
  })

  it('3) elso_kattra_X', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
    cy.get('.jatekter .elem').first().as('elso')
    cy.get('@elso').click()
    cy.get('@elso').should('contain', 'X')
  })

  it('4) X_es_O_valtakozik', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
    cy.get('.jatekter .elem').eq(0).as('elso')
    cy.get('.jatekter .elem').eq(1).as('masodik')
    cy.get('.jatekter .elem').eq(2).as('harmadik')
    cy.get('.jatekter .elem').eq(3).as('negyedik')
    cy.get('@elso').click()
    cy.get('@elso').should('contain', 'X')
    cy.get('@masodik').click()
    cy.get('@masodik').should('contain', 'O')
    cy.get('@harmadik').click()
    cy.get('@harmadik').should('contain', 'X')
    cy.get('@negyedik').click()
    cy.get('@negyedik').should('contain', 'O')
  })

  it('5) masodik_kattra_nincs_valtozas', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
    cy.get('.jatekter .elem').eq(0).as('elso')
    cy.get('@elso').click()
    cy.get('@elso').should('contain', 'X')
    cy.get('@elso').click()
    cy.get('@elso').should('contain', 'X')
  })

  it('6) X_vizszintes_gyozelem', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
    cy.on('window:alert', (text) => {
      expect(text).to.equal('A győztes: X')
    })
    cy.get('.jatekter .elem').as('mezok')
    cy.get('@mezok').eq(0).click()
    cy.get('@mezok').eq(3).click()
    cy.get('@mezok').eq(1).click()
    cy.get('@mezok').eq(4).click()
    cy.get('@mezok').eq(2).click()
  })

  it('7) O_vizszintes_gyozelem', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
    cy.on('window:alert', (text) => {
      expect(text).to.equal('A győztes: O')
    })
    cy.get('.jatekter .elem').as('mezok')
    cy.get('@mezok').eq(3).click()
    cy.get('@mezok').eq(0).click()
    cy.get('@mezok').eq(4).click()
    cy.get('@mezok').eq(1).click()
    cy.get('@mezok').eq(8).click()
    cy.get('@mezok').eq(2).click()
  })

  it('8) O_fuggoleges_gyozelem', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
    cy.on('window:alert', (text) => {
      expect(text).to.equal('A győztes: O')
    })
    cy.get('.jatekter .elem').as('mezok')
    cy.get('@mezok').eq(1).click()
    cy.get('@mezok').eq(0).click()
    cy.get('@mezok').eq(4).click()
    cy.get('@mezok').eq(3).click()
    cy.get('@mezok').eq(8).click()
    cy.get('@mezok').eq(6).click()
  })

  it('9) X_fuggoleges_gyozelem', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
    cy.on('window:alert', (text) => {
      expect(text).to.equal('A győztes: X')
    })
    cy.get('.jatekter .elem').as('mezok')
    cy.get('@mezok').eq(0).click()
    cy.get('@mezok').eq(1).click()
    cy.get('@mezok').eq(3).click()
    cy.get('@mezok').eq(4).click()
    cy.get('@mezok').eq(6).click()
  })

  it('10) X_balra_atlosan_gyozelem', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
    cy.on('window:alert', (text) => {
      expect(text).to.equal('A győztes: X')
    })
    cy.get('.jatekter .elem').as('mezok')
    cy.get('@mezok').eq(0).click()
    cy.get('@mezok').eq(1).click()
    cy.get('@mezok').eq(4).click()
    cy.get('@mezok').eq(2).click()
    cy.get('@mezok').eq(8).click()
  })

  it('11) X_jobbra_atlosan_gyozelem', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
    cy.on('window:alert', (text) => {
      expect(text).to.equal('A győztes: X')
    })
    cy.get('.jatekter .elem').as('mezok')
    cy.get('@mezok').eq(2).click()
    cy.get('@mezok').eq(0).click()
    cy.get('@mezok').eq(4).click()
    cy.get('@mezok').eq(1).click()
    cy.get('@mezok').eq(6).click()
  })
 
  it('12) O_balra_atlosan_gyozelem', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
    cy.on('window:alert', (text) => {
      expect(text).to.equal('A győztes: O')
    })
    cy.get('.jatekter .elem').as('mezok')
    cy.get('@mezok').eq(3).click()
    cy.get('@mezok').eq(0).click()
    cy.get('@mezok').eq(1).click()
    cy.get('@mezok').eq(4).click()
    cy.get('@mezok').eq(2).click()
    cy.get('@mezok').eq(8).click()
  })

  it('13) O_jobbra_atlosan_gyozelem', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
    cy.on('window:alert', (text) => {
      expect(text).to.equal('A győztes: O')
    })
    cy.get('.jatekter .elem').as('mezok')
    cy.get('@mezok').eq(0).click()
    cy.get('@mezok').eq(2).click()
    cy.get('@mezok').eq(1).click()
    cy.get('@mezok').eq(4).click()
    cy.get('@mezok').eq(3).click()
    cy.get('@mezok').eq(6).click()
  })

  it('14) dontetlen', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
    cy.on('window:alert', (text) => {
      expect(text).to.equal('A játék döntetlen!')
    })
    cy.get('.jatekter .elem').as('mezok')
    cy.get('@mezok').eq(0).click()
    cy.get('@mezok').eq(1).click()
    cy.get('@mezok').eq(2).click()
    cy.get('@mezok').eq(4).click()
    cy.get('@mezok').eq(3).click()
    cy.get('@mezok').eq(5).click()
    cy.get('@mezok').eq(7).click()
    cy.get('@mezok').eq(6).click()
    cy.get('@mezok').eq(8).click()
  })
})
