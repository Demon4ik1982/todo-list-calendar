import { useState } from "react";
import { setNoteData } from "../../ui/setNoteData";
import { Button } from "../Button/Button";
import './TodoList.css'
import { ToDo } from "../../model/todoNote";

type IListProps = {
    keyId: string 
}

const TodoList = ({keyId}: IListProps) => {
    const localData = localStorage.getItem(keyId)
    
    
    let list:ToDo = [];
    if (localData !== null && localData !== '') list = JSON.parse(localData)
    
    
    const[todo, setTodo]=useState<ToDo>(list)
    todo;  
    const removeTodo = (index:number) => {
        const newTodo = list.filter((_, i) => i !== index)
        setNoteData(newTodo, keyId)
        setTodo(newTodo)
    }

    const handleClick = (index:number) => {
        list.map((obj) => {
            if (obj.id === index) {
              if (obj.status === true) {
                obj.status = false
              } else {
                obj.status = true
              }
            }
          })
          setNoteData(list, keyId)
          setTodo(list)

      };
        
    if (list.length === 0) {
        return (
            <>
                <span>На сегодня еще нету дел</span>
            </>
        )
    }
    return (
        <>
        <ul className="todo__list">
            {
                list.map((item, id) => (
                    <li className="todo__item-content" key={item.id}>
                        <div className={!item.status ? "todo__item" : "todo__item done"} id={`${item.id}`}>
                        {item.note}
                        </div>
                        <div className="todo__item-wrapper">
                        <Button type='done' onClick={() => handleClick(item.id)}>Готово</Button>
                        <Button type='delete' onClick={() => removeTodo(id)}>Удалить</Button>
                        </div>
                    </li>
                ))
            }
        </ul>        
        </>
    )
}

export default TodoList;