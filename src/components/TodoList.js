import React from 'react';
import TodoItem from './TodoItem';


class TodoList extends React.Component {  
  render() {

    const { removeText } = this.props
    console.log(removeText);

    // const texts = this.props.texts.map((text, i) => {
    //   return (
    //     <div className="item" key={i}>
    //       <h3 className="item-text">{text}</h3>
    //       <button className="item-button" onClick={() => { removeText(text) }}></button>
    //     </div>
    //   );
    // });

    const texts = this.props.texts.map((text, i) => {
      return <TodoItem key={i} text={text} />;
    });

    return <div>{texts}</div>;
  }
}

export default TodoList;