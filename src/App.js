import React from 'react';

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
      <Person person={person} />
      <ClickCounter />
    </div>
  );
}
