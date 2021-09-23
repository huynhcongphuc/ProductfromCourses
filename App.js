import React, { Component } from 'react';
import axios from 'axios';

const divStyle = {
  fontSize: '30px',
  color: 'red'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      mongo: [],
      mssql: []
    }
  };

  componentDidMount() {
    var requesttitle = 'Hello Post';
    axios.post('/api/news', requesttitle)
      .then(res => {
        const news = res.data;
        this.setState({ news: news.news });
      })
      .catch(error => console.log(error));

    axios.post('/api/mongo', requesttitle)
      .then(res => {
        const mongo = res.data;
        this.setState({ mongo: mongo.news });
      })
      .catch(error => console.log(error));

    axios.post('/api/mssql', requesttitle)
      .then(res => {
        const mssql = res.data;
        this.setState({ mssql: mssql.recordset.recordset });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <ul>
        <p style={divStyle}> Database Mongo </p>
        {this.state.mongo.map(item => (
          <li key={item._id}>
            <h2>{item.Name}</h2>
            <h2>{item.Phone}</h2>
          </li>
        ))}
        <p style={divStyle}> Database MySQL </p>
        {this.state.news.map(item => (
          <li key={item.ID}>
            <h2>{item.ID}</h2>
            <h2>{item.Name}</h2>
            <h2>{item.Description}</h2>
          </li>
        ))}
        <p style={divStyle}> Database SQL </p>
        {this.state.mssql.map(item => (
          <li key={item.UniqueID}>
            <h2>{item.Title}</h2>
            <h2>{item.Picture}</h2>
          </li>
        ))}
      </ul>
    )
  }
};

export default App;