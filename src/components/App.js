import './Todo.css';
import React from 'react';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends React.Component {
  state = {text: '' };

  onSearchSubmit = (term) => {
    this.setState({ text: term });
    console.log(this);
  };

  render() {
    return (
      <div className="app">
        <Title />
        <TodoForm 
          onSubmit={this.onSearchSubmit} 
        />
        <TodoList 
          text={this.state.text} 
        />
      </div>
    );
  }
}

export default App;



// const App = () => {
//   return (
//     <div>Hi</div>
//   );
// };
