import React, { Component } from 'react';
import UpdateForm from './UpdateForm';
const axios = require('axios');

export class Bookmark extends Component {
  deleteToDo = async (id) => {
    try {
      const response = await axios.delete(`/bookmarks/${id}`);
      this.props.fetchdata();
    } catch (err) {
      console.log(err);
    }
  };
  deleteButtonStyle = {
    color: 'red',
  };
  render() {
    return (
      <div>
        <h1>
          <button
            onClick={() => this.deleteToDo(this.props.bookmark._id)}
            style={this.deleteButtonStyle}
          >
            {''}X{''}
          </button>
          {this.props.bookmark.title}{''}
          {this.props.bookmark.url}
          <span>{this.props.bookmark.url}</span>
        </h1>
        <UpdateForm
          bookmark={this.props.bookmark}
          fetchdata={this.props.fetchdata}
        />
      </div>
    );
  }
}

export default Bookmark;
