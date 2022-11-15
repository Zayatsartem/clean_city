import React from 'react';
import CostOfCleaning from '../CostOfCleaning /CostOfCleaning';
import Services from '../Services/Services';
import CallForm from './CallForm';
import Comments from './Comments';
import NonstandartForm from './NonstandartForm';

function Main(): JSX.Element {
  return (
    <>
      <CallForm />
      <Services />
      <CostOfCleaning />
      <Comments />
      <NonstandartForm />
    </>
  );
}

export default Main;
