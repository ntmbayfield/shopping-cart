import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CartHeader />
        </header>
        <p className="App-intro">
          <CartItems />
        </p>
        <footer className="App-footer">
          <CartFooter />
        </footer>
      </div>
    );
  }
}

export default App;
