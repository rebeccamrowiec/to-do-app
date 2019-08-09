import React from 'react';
import TodoItem from './TodoItem';


class TodoList extends React.Component {  
  render() {
    const { removeText } = this.props
    // console.log(removeText);

    const texts = this.props.texts.map((text, i) => {
      return <TodoItem key={i} text={text} removeText={removeText} />;
    });

    return <div>{texts}</div>;
  }
}

export default TodoList;