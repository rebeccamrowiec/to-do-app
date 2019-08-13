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
      <form className="form" onSubmit={this.onFormSubmit}>
        <input 
          className="form-input"
          type="text" 
          value={this.state.term} 
          onChange={e => this.setState({ term: e.target.value })} 
        />
        <button className="form-button">Add new item</button>
      </form>
    );
  }
}

export default TodoForm;