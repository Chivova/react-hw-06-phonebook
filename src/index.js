import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './redux/store';
// import { NotificationContainer } from 'react-notifications';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <NotificationContainer> */}
      <App />
      {/* </NotificationContainer> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
