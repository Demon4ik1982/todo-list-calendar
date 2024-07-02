import { AuthForm } from '../AuthForm';
import { useEffect, useState } from 'react';
import ChooseDate from '../ChooseDate/ChooseDate';


export const Account = () => {
  const [username, setUsername] = useState('');
  const localData = localStorage.getItem(`user`)


  useEffect(() => {
    if (localData !== null && localData !== '') setUsername(JSON.parse(localData));
  }, []);

if (username !== '' && username !== undefined) {
  return (
    <>
      <ChooseDate name={username} setNewUser={setUsername}/>
    </>
  )
}
return (
  <>
    <AuthForm setUser={setUsername}/>
  </>
)

};
