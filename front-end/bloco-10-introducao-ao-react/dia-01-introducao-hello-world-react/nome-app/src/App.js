import react from "react";
import './App.css'

const task = (value) => {
  return   <li key={value}>{value}</li>
}

const tasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends react.Component {
  render () {
    return <ul>{tasks.map((tasks) => task(tasks))}</ul>
  }
}

export default App;