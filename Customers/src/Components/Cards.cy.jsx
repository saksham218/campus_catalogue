import React from 'react'
import Cards from './Cards'

describe('<Cards />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Cards />)
  })
})