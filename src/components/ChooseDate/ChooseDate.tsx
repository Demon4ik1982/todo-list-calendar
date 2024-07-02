import { useEffect, useState } from "react"
import { whatMonth } from "../../ui/whatMonth"
import { Button } from "../Button/Button"
import Modal from "../Modal/Modal"
import "./ChooseDate.css"
import Calendar from "../Calendar/Calendar"
import SelectMonth from "../SelectMonth/SelectMonth"
import { setNoteData } from "../../ui/setNoteData"

type UserToDo = {
    name: string,
    setNewUser: React.Dispatch<React.SetStateAction<string>>
}

const ChooseDate = ({name, setNewUser}: UserToDo) => {
  const [modalActive, setModalActive] = useState(false)
  const [selectMonth, setSelectMonth] = useState(false)
  const [dayNote, setDayNote] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState(new Date().getFullYear().toString())
  const [today, setToday] = useState(new Date())


  useEffect(() => {
    const data = whatMonth()
    setMonth(data)
  }, []);

      const handleSubmit = () => {
      setNoteData([''], `user`)
  };

  return (
        <section className="calendar">
        <h2>Добрый день {name}</h2>
        <h2>Ваш список дел на <Button type='data-choose' onClick={() => setSelectMonth(true)}>{`${month} ${year}г.`}</Button></h2>
        <SelectMonth active={selectMonth} setSelectMonth={setSelectMonth} setToday={setToday} setMonth={setMonth} setYear={setYear} year={year}/>
        <Calendar setModalActive={setModalActive} setDayNote={setDayNote} today={today}/>
        <Button type='primary' onClick={() => {setNewUser(''), handleSubmit}}>Выйти</Button>
        <Modal active={modalActive} setActive={setModalActive} todayNote={dayNote} todayMonth={month} username={name}/>
        </section>
    )
}

export default ChooseDate;
