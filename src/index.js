import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import userReducer from './Features/userState/user';
import dashboardSlice from './Features/dashboardState/dashboard';
import { myBooksSlice } from './Features/myBooksState/myBooks';

const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardSlice.reducer,
    myBooks: myBooksSlice.reducer
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
