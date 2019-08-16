import './Todo.css';
import React from 'react';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.removeText = this.removeText.bind(this);
  }

  state = {
    texts: [], 
    bgColor: ''
  };

  onSearchSubmit = (term) => {
    if (term !== '') {
      this.setState({ 
        texts: [...this.state.texts, term] 
      });
    }
  };

  removeText(index){
    this.setState({
      texts: this.state.texts.filter((el, eIndex) => eIndex !== index),
      // bgColor: 'red'
    });
  }

  render() {
    return (
      <div className="app">
        <Title />
        <TodoForm 
          onSubmit={this.onSearchSubmit} 
        />
        <TodoList 
          texts={this.state.texts} 
          // bgColor={this.state.bgColor}
          removeText={this.removeText}
        />
      </div>
    );
  }
}

export default App;