import React from 'react';

class TodoItem extends React.Component {  
  render () {
    const { removeText, text } = this.props

    return (
      <div className="item">
        <h3 className="item-text">{text}</h3>
        <button className="item-button" onClick={() => { removeText(text) }}></button>
      </div>
    );
  }
};

export default TodoItem;