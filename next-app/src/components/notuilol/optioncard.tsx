import React from "react";
import Form from 'next/form'

export default function optionCard(catData) {
  const imageUrl = catData.catData.url;

  return (
    <>
      <div>
        <div className="size-full flex items-center justify-center">
          <img
            className=" justify-center m-10 size-2/6"
            src={imageUrl}
            alt="cat image"
          />
        </div>
        <div className="size-full flex items-center justify-center">

        <Form action="/quiz">
      {'hello'}
      <input name="query" />
      <button type="submit">Submit</button>
    </Form>
          <div className="mx-10">this will be an option</div>
          <div className="mx-10">this will be an option</div>
          <div className="mx-10">this will be an option</div>
          <div className="mx-10">this will be an option</div>
        </div>
      </div>
    </>
  );
}
