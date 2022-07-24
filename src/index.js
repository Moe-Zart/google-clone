import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, {initialState} from './reducer';
import { StateProvider } from './StateProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>
);

//the StateProvider is used to store variables that can be used throughout the entire code


reportWebVitals();
