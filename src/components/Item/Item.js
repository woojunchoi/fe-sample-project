import React, { Component } from 'react';
import css from './item.css'; 


class Item extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className ='item-inside'>
        <div className ='image-container'>
          <img className='item-image'src={this.props.itemPic} />
        </div>
        <div className='content-container'>
          <p className='content-name'>{this.props.itemName}</p>
          <p className='content-price'>{`$${this.props.itemPrice/100}`}</p>
        </div>
        <div className ='button-container'>
          <div className='button' id={this.props.index} onClick={(e) => this.props.addToCart(e)}>Add to cart</div>
        </div>
      </div>
    )
  }
}

export default Item