import React from 'react';
// import TodoItem from './TodoItem';


class TodoList extends React.Component {  
  render() {

    const { removeText } = this.props

    const texts = this.props.texts.map((text, i) => {
      return (
        <div className="item" key={i}>
          <h3 className="item-text">{text}</h3>
          <button className="item-button" onClick={() => { removeText(text) }}>delete</button>
        </div>
      );

      // return <TodoItem key={i} text={text} />
    });
  
    return <div>{texts}</div>;
  }
}

export default TodoList;