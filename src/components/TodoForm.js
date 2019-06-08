import React from 'react';

class TodoForm extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input 
          type="text" 
          value={this.state.term} 
          onChange={e => this.setState({ term: e.target.value })} 
        />
      </form>
    );
  }
}

export default TodoForm;