import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  email: Yup.string()
    .email('insert valid e-mail')
    .required('e-mail is required'),
  password: Yup.string()
    .min(6, 'at least 6 characters long')
    .required('password is required'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />
        <button type="submit">Create account</button>
        <Link to="/">I have an account</Link>
      </Form>
    </>
  );
}
