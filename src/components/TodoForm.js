import React from 'react';

class TodoForm extends React.Component {
  state = { 
    term: '' 
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input 
          type="text" 
          value={this.state.term} 
          onChange={e => this.setState({ term: e.target.value })} 
        />
        <button></button>
      </form>
    );
  }
}

//Deletes multiples of same item together!
//Adds empty item, if empty - don't add


export default TodoForm;