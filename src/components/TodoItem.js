import React from 'react';

const TodoItem = (props) => {  
  const text = props.text;
  
  return (
    <div className="item">
      <h3 className="item-text">{text}</h3>
      <button className="item-button"></button>
    </div>
  );
};

export default TodoItem;



// class TodoItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <h3>{props.text}</h3>
//     );
//   }
// }