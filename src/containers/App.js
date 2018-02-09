import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav/Nav'
import Item from '../components/Item/Item'
import * as shopping_action from './actions/data_action'
import css from './appcss.css'

const mapStateToProps = store => ({
    datas: store.data_reducer.data,
    addedItems: store.data_reducer.addedItems
});

const mapDispatchToProps = (dispatch) => ({
  fetchData : () => dispatch(shopping_action.fetchData()),
  addToCart : (e) => dispatch(shopping_action.addCart(e.target.id))
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
      return <Item key={index} index={index} itemName={data.name} itemPic={data.filename} itemPrice={data.price} addToCart={this.props.addToCart}/>
    })

    return(
      <div className ='app'>
        <Nav numberofitem={this.props.addedItems.length}/>
        <h2 className='header'>Shop our features collection</h2>
        <div className ='big-container'>
          <div className ='item-container'>
            {item}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);