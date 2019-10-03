import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('insert valid e-mail')
    .required('e-mail is required'),
  password: Yup.string().required('password is required'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />
        <button type="submit">Access</button>
        <Link to="/register">Create a free account</Link>
      </Form>
    </>
  );
}
