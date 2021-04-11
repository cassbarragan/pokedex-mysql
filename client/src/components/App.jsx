import React from 'react';
import axios from 'axios';
import List from './List.jsx';
import Select from './select.jsx';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      database: [],
      types: [],
      type: ''
    }
    this.handlegetAll = this.handlegetAll.bind(this);
    this.handlegetType = this.handlegetType.bind(this);
    this.handlefilter = this.handlefilter.bind(this);
  }

  componentDidMount() {
    this.handlegetAll();
    this.handlegetType();
  }

  handlegetAll() {
    axios.get('/api/allPoke')
      .then((res) => {
        this.setState({
          database: res.data
        })
        // console.log(res.data)
      })
      .catch(err => {
        // console.log('hello from error')
        console.log(err)
      })
  }

  handlegetType() {
    axios.get('/api/alltype')
      .then(res => {
        this.setState({
          types: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handlefilter(e) {
    if (e.target.value === 'option') {
      this.handlegetAll()
    } else {
      this.setState({
        type: e.target.value
      }, () => {
        axios.post('/api/filter', {
          type: this.state.type
        })
          .then(res => {
            this.setState({
              database: res.data
            })
          })
          .catch(err => [
            console.log(err)
          ])
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Fullstack Pokedex!</h1>
        <button onClick={this.handlegetAll}>Show All</button>
        <Select types={this.state.types} handlefilter={this.handlefilter} />
        <List pokes={this.state.database} handlegetAll={this.handlegetAll}/>
      </div>
    )
  }
}

export default App;