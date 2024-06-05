import { useState } from "react";
import "./Calendar.css"
import Modal from "../Modal/Modal";
import { whatMonth } from "../../ui/whatMonth";
import { Button } from "../Button/Button";

type UserToDo = {
    name: string,
    setNewUser: React.Dispatch<React.SetStateAction<string>>
}

const Calendar = ({name, setNewUser}: UserToDo) => {
    const [modalActive, setModalActive] = useState(false)
    const [dayNote, setDayNote] = useState('')
    const month = whatMonth()
    
    const today = new Date()
    const monthLength = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const prevMonthLength = new Date(today.getFullYear(), today.getMonth(), 0).getDate();

    const firstDay = new Date(today.getFullYear(), today.getMonth()).getDay()
    const prevMonth = 7 - (7 - firstDay + 1)
    
    const prevDayList=[];
    for (let index = prevMonthLength - prevMonth; index < prevMonthLength; index++) {
        prevDayList.push(index + 1)        
    }
    
    
    const dayList=[];
    for (let index = 0; index < monthLength; index++) {
        dayList.push(index + 1)        
    }
    
    return (
        <section className="calendar">
        <h2>Добрый день {name}</h2>
        <h2>Ваш список дел на {month}</h2>   
        <ul className="calendar__list">
        {prevDayList.map((item, id) => (
            <li className="calendar__item item-grey" key={id}>{item}</li>
        ))}
        {dayList.map((item, id) => (
            <li className="calendar__item" key={id} onClick={() => {setModalActive(true), setDayNote(item.toString())}}>{item}</li>
        ))}
        </ul>
        <Button type='primary' onClick={() => setNewUser('')}>Выйти</Button>
        <Modal active={modalActive} setActive={setModalActive} todayNote={dayNote} username={name}/>
        
        </section>
    )
}

export default Calendar;