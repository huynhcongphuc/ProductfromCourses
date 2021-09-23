import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'sql6.freemysqlhosting.net',
  user: 'sql6438575',
  password: 'IDuV5V7kJJ',
  database: 'sql6438575'
});



class MyHeader extends React.Component {
  
  render() {

    return (
      <div>
      <h1>Hello Style!</h1>
      <p>Huỳnh Công Phúc</p>
      </div>
    );
   
}
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));