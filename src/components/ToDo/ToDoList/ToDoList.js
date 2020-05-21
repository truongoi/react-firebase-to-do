import React from 'react'
import ToDoListItem from './ToDoListItem/ToDoListItem'

const ToDoList = (props) => {
  const listItems = props.list.map(item => {
    return (
      <ToDoListItem key={item.id} id={item.id} {...item} onTaskChange={props.onTaskChange}/>
    )
  });

  return (
    <ul className="mt-8">
      {listItems}
    </ul>
  )
}

export default ToDoList;
