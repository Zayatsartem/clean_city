import React from 'react';
import CostOfCleaning from '../CostOfCleaning /CostOfCleaning';
import Services from '../Services/Services';
import CallForm from './CallForm';
import Comments from './Comments';
import NonstandartForm from './NonstandartForm';
import './Main.scss';

function Main(): JSX.Element {
  return (
    <div className="mainBox">
      <CallForm />
      <Services />
      <CostOfCleaning />
      <Comments />
      <NonstandartForm />
    </div>
  );
}

export default Main;
