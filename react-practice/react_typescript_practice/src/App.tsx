import axios from 'axios';
import React from 'react';
import './App.css';

function App() {
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => { console.log(response);})
  }

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
    </div>
  );
}

export default App;
