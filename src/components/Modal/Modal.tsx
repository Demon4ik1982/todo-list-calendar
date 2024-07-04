import './Modal.css'
import { Button } from "../Button/Button";
import TodoList from '../TodoList/TodoList';
import { FormEventHandler, useState } from 'react';
import { FormField } from '../FormField';
import { setNoteData } from '../../ui/setNoteData';
import { correctMonth } from '../../ui/correctMonth';

type IModalProps = {
  username: string
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  todayNote: string;
  todayMonth: string;
  year: string;
}


const Modal = ({ username, active, setActive, todayNote, todayMonth, year }: IModalProps) => {
  const [note, setNote]=useState('')

  let noteList = []
  const localData = localStorage.getItem(`${username}-${year}-${todayMonth}-${todayNote}`)
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
      setNoteData(noteList, `${username}-${year}-${todayMonth}-${todayNote}`)
      setNote('');
  };

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <div className='modal__content-wrapper'>
          <h2>Список дел на {todayNote} {correctMonth(todayMonth)} </h2>
          <form className='modal__new-note' onSubmit={handleSubmit}>
            <FormField label='Note'>
              <input
              type="text"
              placeholder='Новое задание'
              onChange={(event) => setNote(event.target.value)}
              value={note}/>
            </FormField>
            <Button type='add' >Добавить дело</Button>
          </form>
        </div>
        <TodoList keyId={`${username}-${year}-${todayMonth}-${todayNote}`}/>
      </div>
    </div>
  )

return(
  <></>
)
}

export default Modal;
