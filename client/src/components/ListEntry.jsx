import React from 'react';
import axios from 'axios';

class ListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false,
      currentPoke: {},
      currentName: ''
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleEdit() {
    this.setState({
      display: !this.state.display
    })
  }

  renderEdit() {
    if (this.state.display) {
      return (
        <form className='hide' onSubmit={this.handleSubmit}>
          <input type="text" name="" onChange={this.handleChange} />
          <button>Submit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </form>
      )
    }
  }

  handleChange(e) {
    console.log(e.target.value)
    if (e.target.value !== '') {
      this.setState({
        currentName: e.target.value
      }, ()=>console.log(this.state))
    }
    this.setState({
      currentPoke: this.props.poke,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.put(`/api/pokemon/${this.props.poke.id}`, {
      name: this.state.currentName
    })
      .then((result) => {
        this.props.handlegetAll();
        this.toggleEdit();
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleDelete() {
    axios.delete(`/api/pokemon/${this.props.poke.id}`)
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <h3 className='name' onClick={this.toggleEdit}>{this.props.poke.name}</h3>
        {this.renderEdit()}
        <img src={this.props.poke.img} />
      </div>
    )
  }
}

export default ListEntry;