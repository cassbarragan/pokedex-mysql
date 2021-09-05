import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData(){
    axios.get('/get')
    .then((response) => {
      // console.log('data from axios on front end:', response.data);
      this.setState({list:response.data})
    })
    .catch(err => console.log('ERROR:', err));
  }

  render() {
    const {list} = this.state // {list:[{},...]}
    const typeArr = list?.map(({type}) => type );
    const types = [...new Set(typeArr)];

    // console.log("list:",list)
    return(
      <div>
        <h1>Fullstack Pokedex!</h1>
        <button>Show All</button>
        <select id="types">
          {types?.map((type,idx) => {
                // console.log("type",type)
              return(
                <option key={idx}>{type}</option>
              )
            })
          }
        </select>
        <List list={this.state.list}/>
      </div>
    )
  }
}

export default App;






































  //another way to do this but with destructuring:
  // getData(){
  //   axios.get('/get')
  //   .then(({data}) => {
  //     this.setState({list:data})
  //     console.log('data from axios on front end:', data);
  //   })
  //   .catch(err => console.log('ERROR:', err));
  // }