import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function theForm () {
  return (
    <form action="http://zasasa.com/en/download_instagram_stories.php" method="POST">
        <input type="text" id="url" name="url" size="80" value="nadiaannuar" /><br/ >
        <br /><br />
        <input type="submit" value="Download"></input>
      </form>
  );
}

function Index () {
  return <h2>Home</h2>;
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
