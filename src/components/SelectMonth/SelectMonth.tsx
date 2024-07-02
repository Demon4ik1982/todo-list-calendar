import { Button } from "../Button/Button"
import { FormField } from "../FormField"
import "./SelectMonth.css"

type IProps = {
  active: boolean
  setToday: React.Dispatch<React.SetStateAction<Date>>
  setMonth: React.Dispatch<React.SetStateAction<string>>
  setSelectMonth: React.Dispatch<React.SetStateAction<boolean>>
  setYear: React.Dispatch<React.SetStateAction<string>>
  year: string
}

const SelectMonth = ({active, setToday, setMonth, setSelectMonth, setYear, year}: IProps) => {


  return <>
  <div className={active ? "select active" : "select"} onClick={() => setSelectMonth(false)}>
    <div className="select__list-wrapper" onClick={e => e.stopPropagation()}>
      <FormField label="год">
          <input
            className='auth-form__input'
            type="number"
            name="year"
            min={1900}
            max={2099}
            placeholder='Введите ваше имя'
            onChange={(event) => setYear(event.target.value)}
            value={year}
          />
      </FormField>
      <ul className="select__list">
        <li><Button type='data' onClick={() => { setSelectMonth(false), setMonth('Январь'), setToday(new Date(`${year}-01-01`)) }}>Январь</Button></li>
        <li><Button type='data' onClick={() => { setSelectMonth(false), setMonth('Февраль'), setToday(new Date(`${year}-02-01`)) }}>Февраль</Button></li>
        <li><Button type='data' onClick={() => { setSelectMonth(false), setMonth('Март'), setToday(new Date(`${year}-03-01`)) }}>Март</Button></li>
        <li><Button type='data' onClick={() => { setSelectMonth(false), setMonth('Апрель'), setToday(new Date(`${year}-04-01`)) }}>Апрель</Button></li>
        <li><Button type='data' onClick={() => { setSelectMonth(false), setMonth('Май'), setToday(new Date(`${year}-05-01`)) }}>Май</Button></li>
        <li><Button type='data' onClick={() => { setSelectMonth(false), setMonth('Июнь'), setToday(new Date(`${year}-06-01`)) }}>Июнь</Button></li>
        <li><Button type='data' onClick={() => { setSelectMonth(false), setMonth('Июль'), setToday(new Date(`${year}-07-01`)) }}>Июль</Button></li>
        <li><Button type='data' onClick={() => { setSelectMonth(false), setMonth('Август'), setToday(new Date(`${year}-08-01`)) }}>Август</Button></li>
        <li><Button type='data' onClick={() => { setSelectMonth(false), setMonth('Сентябрь'), setToday(new Date(`${year}-09-01`)) }}>Сентябрь</Button></li>
        <li><Button type='data' onClick={() => { setSelectMonth(false), setMonth('Октябрь'), setToday(new Date(`${year}-10-01`)) }}>Октябрь</Button></li>
        <li><Button type='data' onClick={() => { setSelectMonth(false), setMonth('Ноябрь'), setToday(new Date(`${year}-11-01`)) }}>Ноябрь</Button></li>
        <li><Button type='data' onClick={() => { setSelectMonth(false), setMonth('Декабрь'), setToday(new Date(`${year}-12-01`)) }}>Декабрь</Button></li>
      </ul>
    </div>
  </div>

  </>

}

export default SelectMonth
