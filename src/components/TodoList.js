import React from 'react';
import TodoItem from './TodoItem';


class TodoList extends React.Component {  
  render() {
    // console.log(this.props.bgColor);

    const { removeText } = this.props

    const texts = this.props.texts.map((text, i) => {
      return <TodoItem key={i} count={i} text={text} removeText={removeText} />;
    });

    return <div>{texts}</div>;
  }
}

export default TodoList;