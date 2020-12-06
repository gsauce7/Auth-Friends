import React, { useState } from 'react';
import { AxiosWithAuth } from '../utilities/axiosWithAuth';

const initialFormValue = {
    name: '',
    age: '',
    email: '',
};

const Form = ({ setFriends }) => {
    const [formValue, setFormValue] = useState({initialFormValue});


    const handleChanges = (e) => {
      setFormValue({...formValue, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      AxiosWithAuth()
        .post('/api/friends', formValue)
        .then((res) => {
          console.log('works:', res.data);
          setFriends(res.data);

        })
        .catch((err) => console.log('error', err));
    };

  return (

    <div>
        <h2>These are the Peoples...</h2>
        <form onSubmit={handleSubmit}>
            <input
            type='text
            name='name'
            value={formValue.name}
            onChange={handleChanges}>
            </input>
            <input
            type='text
            name='age'
            value={formValue.age}
            onChange={handleChanges}>
            </input>
            <input
            type='text
            name='email'
            value={formValue.email}
            onChange={handleChanges}>
            </input>

            <button type='submit'>CLICK TO SUBMIT</button>

        </form>
    </div>
);

};

export default Form;