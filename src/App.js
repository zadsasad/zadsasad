import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import PasswordField from './Components/PasswordField';
import theForm from './Components/theForm';

function Index () {
  return <PasswordField />;
}

function App() {
  document.title = "zadsasad";

  return (
    <Router>
    <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/na/">NA</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/na/" component={theForm} />
      </div>
    </Router>
  );
}

export default App;
