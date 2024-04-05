// import React from 'react';
// import ReactDOM from 'react-dom'; // Correct import
// import App from './App.jsx';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// import { AuthProvider } from "../src/store/auth.jsx";

import './index.css';
import { AuthProvider } from './store/Auth.jsx';
// import Pitch from './Pitch/Pitch.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
<React.StrictMode>

    <App />
  </React.StrictMode>
  </AuthProvider>
);

