import React from 'react';
import cowsay from 'cowsay-browser';
import faker from 'faker';

const say = cowsay.say;

class Moo extends React.Component {
  constructor(props) {
    super(props);
    // default state values
    this.state = {};
    this.state.say = say;
    this.state.cowText = 'Moo-lo World';
    this.state.type = 'cow';
  }

  // !: arrow functions are going te be pre-bound to the class itself
  handleMooUpdate = () => {
    //!: setState is an ASYNC function
    this.setState((previousState) => {
      // Here. I'm going to return the state of the application
      return {
        cowText: previousState.cowText = faker.lorem.words(1),
      };
    });
    // !: code here will run immediately
  };

  handleCowTypeChange = (e) => {
    const value = e.target.value;
    console.log(value);
    this.setState(() => ({
      type: value,
    }));
  };

  getCurrentCowText = () => {
    console.log(this.state.cowText);
  };

  render() {
    return (
        <header>
          <h1> Generate Cowsay Lorem </h1>
          <h2 className="cowsay">{ this.state.say({
            'f': this.state.type,
            text: this.state.cowText,
            eyes: 'oo',
            tongue: 'L|',
            wrap: true, // If it is specified, the given message will not be word-wrapped. equivalent to cowsay -n
            wrapLength: 40,
            mode: 'f', // One of "b", "d", "g", "p", "s", "t", "w", "y"
          }) }</h2>
          <button onClick={this.handleMooUpdate}> Generate a new mooo! </button>
          <button onClick={this.getCurrentCowText}> Click to print current state of this.state.cowText to console </button>
          <form onClick={this.handleCowTypeChange}>
            <select>
              <option value="cow">Select cow:</option>
              <option value="kitty">Cat</option>
              <option value="dragon">Dragon</option>
              <option value="bunny">Bunny</option>
              <option value="hellokitty">Hello Kitty</option>
              <option value="milk">Milk</option>
              <option value="moose">Moose</option>
              <option value="koala">Koala</option>
              <option value="ghostbusters">Ghostbusters</option>
              <option value="skeleton">Scowleton</option>
              <option value="sheep">Sheep</option>
              <option value="vader">Vader</option>
              <option value="tux">Tux</option>
            </select>
          </form>
        </header>
    );
  }
}

export default Moo;
