import React from 'react';

class TodoItem extends React.Component {
  changeColor = event => {
    event.preventDefault();
    console.log('red');
    // document.getElementById("red").style.color = "red";
  }
  
  render () {
    const { removeText, text, count } = this.props;
    console.log(count);
    // console.log(bgColor);

    return (
      <div className="item">
        <h3 className="item-text">{text}</h3>
        <button id="red" className="item-button" onClick={() => { removeText(count) }}></button>
      </div>
    );
  }
};

export default TodoItem;

// style={{ backgroundColor: bgColor }}