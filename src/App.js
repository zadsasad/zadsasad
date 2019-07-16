import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

import PasswordField from './Components/PasswordField';

function App() {
  document.title = "zadsasad";

  return (
    <Router>
    <div className="App">
        <PasswordField />
      </div>
    </Router>
  );
}

export default App;
