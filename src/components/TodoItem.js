import React from 'react';

class TodoItem extends React.Component {  
  render () {
    const { removeText, text, count } = this.props;
    console.log(count);

    return (
      <div className="item">
        <h3 className="item-text">{text}</h3>
        <button className="item-button" onClick={() => { removeText(count) }} ><i className="cross fas fa-times" ></i></button>
      </div>
    );
  }
};

export default TodoItem;