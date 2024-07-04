import { useEffect, useState } from "react"
import { whatMonth } from "../../ui/whatMonth"
import { Button } from "../Button/Button"
import Modal from "../Modal/Modal"
import "./ChooseDate.css"
import Calendar from "../Calendar/Calendar"
import SelectMonth from "../SelectMonth/SelectMonth"
import { setUserData } from "../../ui/setUserData"

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
  const [ball, setBall] = useState(false)


  useEffect(() => {
    const data = whatMonth()
    setMonth(data)
  }, []);


  return (
        <section className="calendar">
        <div className="calendar__wrapper">
          <h2 className="calendar__greeting">Добрый день {name}</h2>
          <h3 className="calendar__info">Ваш список дел на <Button type='data-choose' onClick={() => setSelectMonth(true)}>{`${month} ${year}г.`}</Button></h3>
          <div className="calendar__switch-wrapper">
            <span className={ball ? "calendar__switch-name" : "calendar__switch-name switch"}>Дни</span>
              <div className="calendar__switch" onClick={() => {setBall(!ball)}}>
                <div className={ball ? "calendar__ball action" : "calendar__ball" }>
                </div>
              </div>
            <span className={!ball ? "calendar__switch-name" : "calendar__switch-name switch"}>Недели</span>
          </div>
        </div>
        <SelectMonth active={selectMonth} setSelectMonth={setSelectMonth} setToday={setToday} setMonth={setMonth} setYear={setYear} year={year}/>
        <Calendar weekActive={ball} setModalActive={setModalActive} setDayNote={setDayNote} today={today} userName={name} month={month}/>
        <Button type='primary' onClick={() => {setNewUser(''), setUserData('', 'user')}}>Выйти</Button>
        <Modal active={modalActive} setActive={setModalActive} todayNote={dayNote} todayMonth={month} username={name} year={year}/>
        </section>
    )
}

export default ChooseDate;
