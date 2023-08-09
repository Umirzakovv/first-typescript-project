import React, { FC } from 'react'
import { ITodo } from '../../types/types';

interface TodoProps {
  todo: ITodo;
}

const TodoItem: FC<TodoProps> = ({todo}) => {
  return (
    <div style={{border: "1px solid red", padding: "15px"}}>
      {todo.id}.
      <input type="checkbox" style={{marginRight: "10px"}} />
      {todo.title}
    </div>
  )
}

export default TodoItem;