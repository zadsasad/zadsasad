import React from 'react';
import './App.css';

function App() {
  document.title = "zadsasad";

  return (
    <div className="App">
      <form action="http://zasasa.com/en/download_instagram_stories.php" method="POST">
        <input type="text" id="url" name="url" size="80" value="nadiaannuar" /><br/ >
        <br /><br />
        <input type="submit" value="Download"></input>
      </form>
    </div>
  );
}

export default App;
