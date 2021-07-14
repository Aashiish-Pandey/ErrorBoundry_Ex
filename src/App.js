import React from 'react';
import ErrorBoundry from './ErrorBoundry'

import Person from './Person';
import ClickCounter from './ClickCounter';

import './style.css';

export default function App() {
  const person = {
    firstName: 'Ashish',
    lastName: 'Pandey'
  };
  return (
    <div>
      <ErrorBoundry>
      <Person person={person} />
      <Person person={} />
      <ClickCounter />
      </ErrorBoundry>
    </div>
  );
}
