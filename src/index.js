import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductDetailsPage from './ProductDetailsPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProductDetailsPage />, document.getElementById('root'));
registerServiceWorker();
