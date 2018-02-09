import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav/Nav'
import Item from '../components/Item/Item'
import * as shopping_action from '../actions/data_action'
import css from './appcss.css'
import CartModal from '../components/CartModal/CartModal'

const mapStateToProps = store => ({
    datas: store.data_reducer.data,
    addedItems: store.data_reducer.addedItems,
    currentItem: store.data_reducer.currentItem
});

const mapDispatchToProps = (dispatch) => ({
  fetchData : () => dispatch(shopping_action.fetchData()),
  addToCart : (e) => dispatch(shopping_action.addCart(e.target.id)),
  changeBorder : (e) => dispatch(shopping_action.changeBorder(e.target.id))
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const item = this.props.datas.map((data,index) => {
      return <Item
       key={index}
       index={index}
       itemName={data.name}
       itemPic={data.filename}
       itemPrice={data.price}
       addToCart={this.props.addToCart}
       currentItem={this.props.currentItem}
       changeBorder={this.props.changeBorder}/>
    })

    return(
      <div className ='app'>
        <Nav numberofitem={this.props.addedItems.length}/>
       <div className ='lower'>
        <CartModal />
        <h2 className='header'>Shop our features collection</h2>
        <div className ='big-container'>
          <div className ='item-container'>
            {item}
          </div>
        </div>
       </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);