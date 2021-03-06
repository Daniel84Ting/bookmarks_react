import './App.css';
import React, { Component } from 'react';
import Bookmark from './components/Bookmark';
import CreateForm from './components/CreateForm';
const axios = require('axios');

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarks: [],
    };
  }
  fetchdata = async () => {
    try {
      const response = await axios.get('/bookmarks');
      this.setState({ bookmarks: response.data });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount = () => {
    this.fetchdata();
  };

  render() {
    return (
      <div>
        <CreateForm fetchdata={this.fetchdata()} />
        {this.state.bookmarks.map((bookmark, index) => {
          return (
            <Bookmark
              bookmark={bookmark}
              key={bookmark._id}
              fetchdata={this.fetchdata()}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
