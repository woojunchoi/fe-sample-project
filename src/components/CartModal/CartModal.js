import React, { Component } from 'react';
import css from './cartmodel.css'; 


class CartModal extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    let cartClass = ['cart-modal']
    if(this.props.cartPage) {
        cartClass.push('cart')
    }

    let cartContent =[];
    let price = 0;

    if(this.props.cartItem.length === 0) {
        cartContent.push(    
            <div key='0' className='cart-text'> 
                <p className='nothing'>Nothing in your cart,</p>
                <p className='nothing'>start shopping</p>
            </div>
        )
    }

    else {
        for(let i=0; i<this.props.cartItem.length; i++) {
            price += this.props.cartItem[i].price/100
            cartContent.push(
                    <div key={i} className ='item-list'>
                        <img className='item-pic' src={this.props.cartItem[i].filename} />
                        <div className ='item-desc'>
                            <div className='nameanddelete'>
                            <p>{this.props.cartItem[i].name}</p>
                            <i id={i} onClick={(e) => this.props.deleteItem(e)} className="fa fa-close"></i>
                            </div>
                            <p>${this.props.cartItem[i].price/100}</p>
                        </div>
                    </div>
                    )
        }
        
    }
    return(
      <div className ={cartClass.join(' ')}>
        <div className = 'cart-content'>
        <div key='cart' className ='cart-text'>
                <h2 className='yourcart'>Your Cart</h2>
                <br/>
                {cartContent}
                <div className ='line'></div>
                <div className ='total'>
                    <p>Total</p>
                    <p>${price.toFixed(2)}</p>
                </div>
                <div className='backbutton' onClick={this.props.changeView}>Back</div>
            </div>  
        </div>
      </div>
    )
  }
}

export default CartModal