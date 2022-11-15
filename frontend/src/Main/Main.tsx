import { Contacts } from '@mui/icons-material';
import React from 'react';
import CostOfCleaning from '../CostOfCleaning /CostOfCleaning';
import Services from '../Services/Services';
import CallForm from './CallForm';
import NonstandartForm from './NonstandartForm';

function Main(): JSX.Element {
  return (
    <>
      <CallForm />
      <Services />
      <CostOfCleaning />
      <NonstandartForm />
      <Contacts />
    </>
  );
}

export default Main;
