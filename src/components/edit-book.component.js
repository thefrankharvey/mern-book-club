import React, { Component } from 'react';
import axios from 'axios';

export default class EditBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      author: 0,
      genre: '',
      notes: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/books/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          author: response.data.author,
          genre: response.data.genre
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    }
    
      onChangeTitle(e) {
        this.setState({
          title: e.target.value
        })
      }
    
      onChangeAuthor(e) {
        this.setState({
          author: e.target.value
        })
      }
    
  onChangeGenre(e) {
    this.setState({
      genre: e.target.value
    })
  }
  
  onSubmit(e) {
    e.preventDefault();

    const book = {
      title: this.state.username,
      author: this.state.author,
      genre: this.state.genre,
    }

    axios.post('http://localhost:5000/books/update/' + this.props.match.params.id, book)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Book</h3>
      <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
          <label>Title: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <div className="form-group">
          <label>Author: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
              />
        </div>
        <div className="form-group">
          <label>Genre: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}
              />
        </div>
        <div className="form-group">
          <label>Notes: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.notes}
              onChange={this.onChangeNotes}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Book" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}