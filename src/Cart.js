import React, { Component } from 'react'
import Summary from './Summary'


class Cart extends Component {
    
   render() {
    return (
        <section className="main__summary">
        <h2>Your cart</h2>
        <Summary 
        selected={this.props.selected}
        features={this.props.features}
        />
      </section>
      )
   }
}

export default Cart;