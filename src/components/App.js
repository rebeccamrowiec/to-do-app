import './Todo.scss';
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
          removeText={this.removeText}
        />
      </div>
    );
  }
}

export default App;