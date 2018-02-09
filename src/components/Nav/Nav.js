import React, { Component } from 'react';
import css from './nav.css'; 


class Nav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <div className='nav_place'>
        <div>
            <span className="glyphicon glyphicon-shopping-cart"></span>
            <div id='nav-text' className='nav'>Cart.ly</div>
            <div id='shop' className='nav'>Shop</div>
        </div>
        <div className='nav-right'>
            <div className='nav'>Your cart</div>
            <div id='cart-number' className='nav'>{this.props.numberofitem}</div>
        </div>
      </div>
      </div>
    )
  }
}

export default Nav