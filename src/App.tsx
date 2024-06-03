import './App.css'
import Calendar from './components/Calendar/Calendar';
import { whatMonth } from './ui/whatMonth'

function App() {
const month = whatMonth();

  return (
    <> 
    <div>Ваш список дел на {month}</div>
     <Calendar/> 
    </>
  )
}

export default App
