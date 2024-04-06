import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
// import { UsercontextProvide } from './context/useContext';
// import { ModeProvider } from './context/modeContext';
// import {DisplayModeProvider} from './context/displayMode'
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
//   root.render(
//     <App />
//   );
// }, 1000);
import UserDataContextProvider from './context/useContexProps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <UserDataContextProvider>
    <App />
  </UserDataContextProvider>






)