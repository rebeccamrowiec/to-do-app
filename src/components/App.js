import './Todo.css';
import React from 'react';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends React.Component {
  state = {texts: [] };

  onSearchSubmit = (term) => {
    this.setState({ texts: [
      ...this.state.texts, term
    ] 
  });

  };

  // componentDidMount() {
  //   term: '';
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