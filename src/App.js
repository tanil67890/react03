import React from 'react';
import './App.css';
import Header from './components/Header';
import Heading from './components/Heading';
import Home from './components/Home';
import items from './data'

class App extends React.Component{
  constructor(){
    super()
    this.state =  {
      home: items
    }
    this.removeItem = this.removeItem.bind(this)
  }

  removeItem(itemToRemove){
    this.setState((state) => ({
      home : state.home.filter(x => x !== itemToRemove)
    }))
  }

  render(){
    return  <div className="App">
              <Header/>
              <Heading noOfRecipies={items.length} />
              <Home onRemove={this.removeItem} items={this.state.home}/>
            </div>
  }
}

export default App;
