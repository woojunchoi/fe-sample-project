//dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import all actions
import * as shopping_action from '../actions/data_action'
//css
import css from './appcss.css'
//import child components
import Nav from '../components/Nav/Nav'
import Item from '../components/Item/Item'
import CartModal from '../components/CartModal/CartModal'

//pass states as props
const mapStateToProps = store => ({
    datas: store.data_reducer.data,
    addedItems: store.data_reducer.addedItems,
    currentItem: store.data_reducer.currentItem,
    cartPage: store.data_reducer.cartPage
});

//pass action dispatcher as props
const mapDispatchToProps = (dispatch) => ({
  fetchData : () => dispatch(shopping_action.fetchData()),
  addToCart : (e) => dispatch(shopping_action.addCart(e.target.id)),
  changeBorder : (e) => dispatch(shopping_action.changeBorder(e.target.id)),
  changeView : () => dispatch(shopping_action.changeView()),
  deleteItem : (e) => dispatch(shopping_action.deleteItem(e.target.id))
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  //fetch image datas from json file AFTER initial render(to handle async action)
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    //render Item component based on length of data props
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

    let secondLower =['secondlower']
    if(this.props.cartPage) {
      secondLower.push('cart')
    }
    return(
      <div className ='app'>
        <Nav
         numberofitem={this.props.addedItems.length} 
         changeView = {this.props.changeView} 
         cartPage={this.props.cartPage}
         />
          <div className ='lower'>
            <CartModal
              cartItem={this.props.addedItems}
              cartPage={this.props.cartPage}
              changeView = {this.props.changeView}
              deleteItem = {this.props.deleteItem}
             />
           <div className ={secondLower.join(' ')}>
             <h2 className='header'>Shop our features collection</h2>
             <div className ='big-container'>
                <div className ='item-container'>
                  {item}
                </div>
            </div>
           </div>
          </div>
       </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);