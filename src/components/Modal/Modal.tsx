import './Modal.css'
import { Button } from "../Button/Button";
import TodoList from '../TodoList/TodoList';
import { FormEventHandler, useState } from 'react';
import { FormField } from '../FormField';
import { setNoteData } from '../../ui/setNoteData';
import { correctMonth } from '../../ui/correctMonth';
import { whatMonth } from '../../ui/whatMonth';

type IModalProps = {
  username: string
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  todayNote: string
}


const Modal = ({ username, active, setActive, todayNote }: IModalProps) => {
  const [note, setNote]=useState('')
  const month = whatMonth()
  let noteList = []
  const localData = localStorage.getItem(`${username}-${todayNote}`)
  if (localData !== null && localData !== '') noteList = JSON.parse(localData)
    
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault();
      if (note === '') return;

      const newNote = {
        id: Math.floor(Math.random() * 123344321),
        note: note.trim(),
        status: false
      }

      noteList.push(newNote)
      setNoteData(noteList, `${username}-${todayNote}`)   
      setNote('');        
  };
if (month !== undefined) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>

      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <div className='modal__content-wrapper'>
          <h2>Список дел на {todayNote} {correctMonth(month)} </h2>
          <form className='modal__new-note' onSubmit={handleSubmit}>
            <FormField label='Note'>
              <input
              type="text" 
              placeholder='Новое задание' 
              onChange={(event) => setNote(event.target.value)}
              value={note}/>
            </FormField>
            <Button type='primary' >Добавить дело</Button>
          </form>
        </div>
        <TodoList keyId={`${username}-${todayNote}`}/>
        <div className="modal__btn" onClick={() => setActive(false)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" fill="black" />
        </svg>
      </div>
      </div>
    </div>
  )
}
return(
  <></>
)
}

export default Modal;
