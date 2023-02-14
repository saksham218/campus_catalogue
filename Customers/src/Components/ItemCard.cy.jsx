import React from 'react'
import ItemCard from './ItemCard'

describe('<ItemCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ItemCard />)
  })
})