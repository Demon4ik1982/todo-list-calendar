import { useState } from "react";
import { checkingTodo } from "../../ui/checkingTodo";
import WeekListModal from "../WeekListModal/WeekListModal";
import "./Calendar.css";

type UserToDo = {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setDayNote: React.Dispatch<React.SetStateAction<string>>;
  today: Date;
  userName: string;
  month: string;
  weekActive: boolean;
};

const Calendar = ({
  setModalActive,
  setDayNote,
  today,
  userName,
  month,
  weekActive,
}: UserToDo) => {
  const monthLength = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();
  const prevMonthLength = new Date(
    today.getFullYear(),
    today.getMonth(),
    0
  ).getDate();

  const [weekModalActive, setWeekModalActive] = useState(false)

  let firstDay = new Date(today.getFullYear(), today.getMonth()).getDay();
  if (firstDay === 0) firstDay = 7;

  const prevMonth = 7 - (7 - firstDay + 1);

  const prevDayList = [];
  for (
    let index = prevMonthLength - prevMonth;
    index < prevMonthLength;
    index++
  ) {
    prevDayList.push(index + 1);
  }

  const dayList = [];
  const weekList = [];
  for (let index = 0; index < monthLength; index++) {
    dayList.push(index + 1);
  }

  const week = Math.ceil((prevMonth + monthLength) / 7)


  const firstWeekDays = 7 - prevMonth;
  const lastWeekDays = ((prevMonth + monthLength) - ((week - 1) * 7));

  const weekDaysList = new Array<number[]>
  const [weekData, setWeekData] = useState<number[]>([])
    let day = 1
    for (let index = 0; index < week; index++) {
      if (index === 0) {
        const weekDays: number[] = []
        for (let index = 0; index < firstWeekDays; index++) {
          weekDays.push(day)
          day++
        }
        weekDaysList.push(weekDays)
      }
      if (index > 1) {
        const weekDays = []
        for (let index = 0; index < 7; index++) {
          weekDays.push(day)
          day++
        }
        weekDaysList.push(weekDays)
      }
      if (index === week - 1) {
        const weekDays = []
        for (let index = 0; index < lastWeekDays; index++) {
          weekDays.push(day)
          day++
        }
        weekDaysList.push(weekDays)
      }
      weekList.push(index + 1);
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
          <li className="calendar__item item-grey" key={id}>
            {item}
          </li>
        ))}
        {dayList.map((item, id) => (
          <li
            className="calendar__item"
            key={id}
            onClick={() => {
              setModalActive(true), setDayNote(item.toString());
            }}
          >
            {item}
            {checkingTodo(
              `${userName}-${today.getFullYear().toString()}-${month}-${item}`
            ) ? (
              <div className={prevMonth + item === 7 || prevMonth + item === 6 ? 'calendar__todo weekend' : 'calendar__todo'}></div>
            ) : (
              <></>
            )}
          </li>
        ))}
        {weekActive ? <li className="week__wrapper">
          <ul className="week__list">
            {weekList.map((item, id) => (
              <li onClick={() => { setWeekModalActive(true), setWeekData(weekDaysList[id])}} className={item === weekList.length ? `week__item last-week-${lastWeekDays}` : 'week__item'} key={id}>
              </li>
            ))}
          </ul>
        </li> : <></>}

      </ul>
      <WeekListModal username={userName} year={today.getFullYear().toString()} todayMonth={month} active={weekModalActive} setWeekModalActive={setWeekModalActive} weekDaysList={weekData}/>
    </>
  );
};

export default Calendar;
