import { FormEventHandler, useState } from 'react';
import './AuthForm.css';
import { FormField } from '../FormField/FormField';
import { Button } from '../Button/Button';
import { stringСonversion } from '../../ui/stringСonversion';

type TUser = {
  setUser: React.Dispatch<React.SetStateAction<string>>
}


export const AuthForm = ({setUser}: TUser) => {
  const [username, setUsername] = useState('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setUser(stringСonversion(username.trim()))
  };

  return (
    <div className="auth-form">
      <h2>Представьтесь пожалуйста</h2>
      <form className="auth-form__wrapper" onSubmit={handleSubmit}>
      <FormField label="Имя пользователя">
        <input
          className='auth-form__input'
          type="text"
          name="username"
          placeholder='Введите ваше имя'
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
      </FormField>
      <Button type='primary'>Войти</Button>
      </form>
    </div>
  );
};
