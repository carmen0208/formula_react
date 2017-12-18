import React from 'react';
import ReactDOM from 'react-dom';
import ResponseToForm from './ResponseToForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResponseToForm />, div);
});
