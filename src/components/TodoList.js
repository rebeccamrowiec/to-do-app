import React from 'react';
// import TodoItem from './TodoItem';


const TodoList = (props) => {  
  // texts = Array.from(props.texts)
  // console.log(props.text);

  const texts = props.texts.map((text) => {
    return <h3 key={text.id}>{text}</h3>
  });
  
  return <div>{texts}</div>;
};


// const TodoList = (props) => {  
//   const texts = props.texts.map(text => {
//     return <TodoItem key={text} text={text} />
//   });
  
//   return <div>{texts}</div>;
// };

export default TodoList;