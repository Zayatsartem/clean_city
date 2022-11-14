import React from 'react';
import CallForm from './CallForm';
import Comments from './Comments';
import NonstandartForm from './NonstandartForm';

function Main(): JSX.Element {
  return (
    <>
      <CallForm />
      <Comments />
      <NonstandartForm />
    </>
  );
}

export default Main;
