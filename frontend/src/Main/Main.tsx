import React from 'react';
import Services from '../Services/Services';
import CallForm from './CallForm';
import Comments from './Comments';
import NonstandartForm from './NonstandartForm';

function Main(): JSX.Element {
  return (
    <>
      <CallForm />
      <Services />
      <Comments />
      <NonstandartForm />
    </>
  );
}

export default Main;
