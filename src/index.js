import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ResponseToForm from './components/ResponseToForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ResponseToForm />, document.getElementById('root'));
registerServiceWorker();
