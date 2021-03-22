import React, { Component } from 'react';

export class Bookmark extends Component {
  render() {
    return <div>{this.props.bookmark.title}</div>;
  }
}

export default Bookmark;
