import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div>
        <h1>Fullstack Pokedex!</h1>
        <button>Show All</button>
        <select id="types">
          <option>Sort by Type</option>
          <option>Grass</option>
          <option>Fire</option>
          <option>Water</option>
        </select>
        <List />
      </div>
    )
  }
}


export default App;