import "./Calendar.css"

type UserToDo = {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setDayNote: React.Dispatch<React.SetStateAction<string>>;
  today: Date;
}

const Calendar = ({setModalActive, setDayNote, today }: UserToDo) => {


    const monthLength = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const prevMonthLength = new Date(today.getFullYear(), today.getMonth(), 0).getDate();

    let firstDay = new Date(today.getFullYear(), today.getMonth()).getDay()
    if (firstDay === 0) firstDay = 7

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
        <>
          <ul className="calendar__list">
            <li className="calendar__item clalendar__day-item">Пн</li>
            <li className="calendar__item clalendar__day-item">Вт</li>
            <li className="calendar__item clalendar__day-item">Ср</li>
            <li className="calendar__item clalendar__day-item">Чт</li>
            <li className="calendar__item clalendar__day-item">Пт</li>
            <li className="calendar__item clalendar__day-item">Сб</li>
            <li className="calendar__item clalendar__day-item">Вс</li>
          {prevDayList.map((item, id) => (
              <li className="calendar__item item-grey" key={id}>{item}</li>
          ))}
          {dayList.map((item, id) => (
              <li className="calendar__item" key={id} onClick={() => {setModalActive(true), setDayNote(item.toString())}}>{item}</li>
          ))}
          </ul>
        </>

    )
}

export default Calendar;
