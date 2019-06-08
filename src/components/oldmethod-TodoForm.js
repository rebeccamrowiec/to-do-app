import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {/* <div className="field"> */}
          {/* <label>Image Search</label> */}
          <input 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
          />
        {/* </div> */}
      </form>
    );
  }
}

export default TodoForm;