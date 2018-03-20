import React, { Component } from 'react';
import css from './nav.css'; 


class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //change classname based on the state
    let navStyle =['nav']
    if(!this.props.cartPage) {
      navStyle.push('selected')
    }
    let cartline = ['nav']
    if(this.props.cartPage) {
      cartline.push('selected')
    }

    return(
    <div>
      <div className='nav_place'>
        <div>
            <span className="glyphicon glyphicon-shopping-cart"></span>
            <div id='nav-text' className='nav'>Cart.ly</div>
            <div id='shop' className={navStyle.join(' ')}  onClick={this.props.changeView}>Shop</div>
        </div>
        <div className='nav-right'>
            <div id='nav-cart' className={cartline.join(' ')} onClick={this.props.changeView}>Your cart</div>
            <div id='cart-number' className='nav'>{this.props.numberofitem}</div>
        </div>
      </div>
    </div>
    )
  }
}

export default Nav