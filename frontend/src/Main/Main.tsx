import React from 'react';
import CostOfCleaning from '../CostOfCleaning /CostOfCleaning';
import Services from '../Services/Services';
import CallForm from './CallForm';
import NonstandartForm from './NonstandartForm';
import './Main.scss';
import Contacts from '../Contacts/Contacts';
import Comments from './Comments';

function Main(): JSX.Element {
  return (
    <div className="mainBox">
      <CallForm />
      <Services />
      <CostOfCleaning />
      <Comments />
      <NonstandartForm />
      <Contacts />
    </div>
  );
}

export default Main;
