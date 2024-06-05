import Calendar from '../Calendar/Calendar';
import { AuthForm } from '../AuthForm';
import { useState } from 'react';


export const Account = () => {
  const [username, setUsername] = useState('');

if (username !== '' && username !== undefined) {
  return (
    <>
      <Calendar name={username} setNewUser={setUsername}/>
    </>
  )
}
return (
  <>
    <AuthForm setUser={setUsername}/>
  </>
)

};
