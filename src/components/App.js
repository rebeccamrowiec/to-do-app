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
    texts: [] 
  };

  onSearchSubmit = (term) => {
    if (term !== '') {
      this.setState({ texts: [
        ...this.state.texts, term
      ] 
    });
  }

    // console.log(this.removeText);
  };

  removeText(index){
    // console.log(this.state, name);
    this.setState({
      texts: this.state.texts.filter((el, eIndex) => eIndex !== index)
    })
  }

  // removeText(name){
  //   console.log(this.state, name);

  //   this.setState({
  //     texts: this.state.texts.filter((text, el) => {
  //       return el !== name;
  //     })
  //   })
  // }

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