import "./Calendar.css"

const Calendar = () => {
    const today = new Date()
    const monthLength = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const prevMonthLength = new Date(today.getFullYear(), today.getMonth(), 0).getDate();

    const firstDay = new Date(today.getFullYear(), today.getMonth()).getDay()
    const prevMonth = 7 - (7 - firstDay + 1)
    console.log(prevMonth);
    
    const prevDayList=[];
    for (let index = prevMonthLength - prevMonth; index < prevMonthLength; index++) {
        prevDayList.push(index + 1)        
    }
    
    console.log(prevDayList);
    
    const dayList=[];
    for (let index = 0; index < monthLength; index++) {
        dayList.push(index + 1)        
    }
    
    return (
        <div className="calendar">
        <ul className="calendar__list">
        {prevDayList.map((item, id) => (
            <li className="calendar__item item-grey" key={id}>{item}</li>
        ))}
        {dayList.map((item, id) => (
            <li className="calendar__item" key={id}>{item}</li>
        ))}
        </ul>
        
        </div>
    )
}

export default Calendar;