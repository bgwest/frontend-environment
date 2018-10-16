import React from 'react';
import Header from '../header/header'
import Moo from '../moo-world/moo-world';

// !: = development note:

// !: in code, components are classes that extend from React.Component

class App extends React.Component {
  //!: props are the main way of communication in REACT
  constructor(props) {
    super(props); // Initialize everything on React's side of the component

    this.state = {};
    this.state.counter = 0;
    this.state.message = 'Trey is super COOL';
    this.state.secretState = 'Trey is a coward, but I love him';
    this.state.content = '';
  }

  // !: arrow functions are going te be pre-bound to the class itself
  handleCounterIncrement = () => {
    //!: setState is an ASYNC function
    this.setState((previousState) => {
      // Here. I'm going to return the state of the application
      return {
        counter: previousState.counter +1,
      };
    });
    // !: code here will run immediately
  };

  // !: arrow functions are going to be pre-bound to the class itself
  handleCounterDecrement = () => {
    // !: setState is an ASYNC function
    this.setState((previousState) => {
      // Here. I'm going to return the state of the application
      return {
        counter: previousState.counter -1,
      };
    });
    // !: code here will run immediately
  };

  // !: React components NEED to have one render function in every compontent
  render() {
    return (
      <div className='normal-class'>
        <Header/> {/* new Header().render();*/}
        <Moo />
        <p> This is a message from the developer (Benjamin) : { this.state.message }</p>
        <p>The cutest cats are:</p>
        <ul>
          {
            ['Trey', 'Nala', 'Trey and Nala'].map(item => <li key={ item }> { item } </li>)
          }
        </ul>
        <p> The value of the counter is: { this.state.counter }</p>
        <button onClick={this.handleCounterIncrement}> Increment Counter </button>
        <button onClick={this.handleCounterDecrement}> Decrement Counter </button>
      </div>
    ); // !: every return function will return JSX
  }
}

//!: - export default, means I'm only exporting ONE entity
export default App;
