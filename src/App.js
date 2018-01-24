import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';

const list = [
{
title: 'React',
url: 'https://facebook.github.io/react/',
author: 'Jordan Walke',
num_comments: 3,
points: 4,
objectID: 0,
},
{
title: 'AReact',
url: 'https://facebook.github.io/react/',
author: 'AJordan Walke',
num_comments: 3,
points: 4,
objectID: 1,
}
];

function isSearched(searchTerm) {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}
// or
// const isSearched = searchTerm => item =>
//   item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(function isNotId(item) {
      return item.objectID !== id;
    });

    // or
    // const isNotId = item => item.objectID !== id;
    // const updatedList = this.state.list.filter(isNotId);
    // or much easier to read
    // const updatedList = this.state.list.filter(item => item.objectID !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text"
            type="text"
            onChange={this.onSearchChange}
          />
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
