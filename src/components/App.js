import React     from 'react';
import ReactDOM  from 'react-dom';


class App extends React.Component {
  render(){
    return(
      <div>
        <h1>Hello { this.props.name }!</h1>
        <img src='/assets/img/logo--react.svg' alt='Logo React'/>
      </div>
    )
  }
}


module.exports = App;
