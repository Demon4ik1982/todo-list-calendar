import { ToDo } from "../../model/todoNote";
import "./WeekListModal.css"

type IProps = {
  weekDaysList: number[];
  active: boolean;
  username: string;
  year: string;
  todayMonth: string;
  setWeekModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeekListModal = ({ weekDaysList, active, setWeekModalActive, username, year, todayMonth }: IProps) => {

  const weekDaysTodo = new Array<ToDo>
  weekDaysList.map(item => {
      let noteList = []
      const localData = localStorage.getItem(`${username}-${year}-${todayMonth}-${item}`)
      if (localData !== null && localData !== '') noteList = JSON.parse(localData)
      weekDaysTodo.push(noteList)
  })

  return (
    <>
      <div
        className={active ? "week-modal active" : "week-modal"}
        onClick={() => setWeekModalActive(false)}
      >
        <div
          className="week-modal__wrapper"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="week-modal__list">
            {weekDaysTodo.map((item, id) =>
              item !== undefined && item.length !== 0 ? (
                <li key={id} className="week-modal__item-content">
                  <p className="week-modal__descr">{`Список заданий на ${weekDaysList[id]}-е число:`}</p>
                  <ul className="week-modal__item-wrapper">
                    {item.map((element) => (
                      <li className="week-modal__item-content" key={element.id}>
                        {!element.status ? (
                          <div
                            className="week-modal__item"
                            id={`${element.id}`}
                          >
                            {element.note}
                          </div>
                        ) : (
                          <div className="week-modal__item-done">
                            <div className="week-modal__item-cheak">
                              <svg
                                width="15px"
                                height="15px"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 v 10 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -10 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 10 c 0.421875 0 0.765625 0.234375 0.917969 0.585938 l -0.667969 0.757812 l -6.296875 7.195312 l -2.246094 -2.246093 c -0.390625 -0.390625 -1.023437 -0.390625 -1.414062 0 s -0.390625 1.027343 0 1.417969 l 3 3 c 0.410156 0.40625 1.078125 0.386718 1.460937 -0.050782 l 6.246094 -7.136718 v 7.476562 c 0 0.570312 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -10 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0"
                                  fill="#2e3436"
                                />
                              </svg>
                            </div>
                            <div
                              className="week-modal__item"
                              id={`${element.id}`}
                            >
                              {element.note}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="week-modal__item-content">
                  <p className="week-modal__descr">
                    На {`${weekDaysList[id]}`}-е число заданий нет
                  </p>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );

}

export default WeekListModal
