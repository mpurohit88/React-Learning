import React from 'react';

function Home({ match, location, history }) {
  console.log("match....", match);
  console.log("location....", location);
  console.log("history....", history);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Home
        </p>
      </header>
    </div>
  );
}

export default Home;
