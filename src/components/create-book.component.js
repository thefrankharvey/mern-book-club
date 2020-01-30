import React, { Component } from 'react';
import axios from 'axios';

export default class CreateBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      author: '',
      genre: ''
    }
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

  onChangeGenre(genre) {
    this.setState({
      genre: genre
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const book = {
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre
    }

    axios.post('http://localhost:5000/books/add', book)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Upload a Book</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Title: </label>Title
          <input  type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <div className="form-group">
          <label>Author: </label>Name
          <input 
              type="text" 
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
              />
        </div>
        <div className="form-group">
          <label>Genre: </label>Genre
          <input 
              type="text" 
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Upload Book" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}

