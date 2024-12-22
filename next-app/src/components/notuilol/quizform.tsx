'use client';

import React from "react";
import Form from 'next/form'

type Option = {
  name: string,
  id: string,
};

type Props = {
  names: Option[]
}

export default function QuizForm(props: Props) {


  return (
    <>


      <Form action="/quiz">
        {'hello'}
        <input name="query" />
        <button type="submit">Submit</button>
      </Form>
      <div className="mx-10">this will be an option</div>
      <div className="mx-10">this will be an option</div>
      <div className="mx-10">this will be an option</div>
      <div className="mx-10">this will be an option</div>


    </>
  );
}
