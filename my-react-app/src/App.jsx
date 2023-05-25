import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [list, setList] = useState([])

  const handleClick = () => {
    setList([...list, text])
    setText("")
  }
  return (
    <div>
      <h1>My react app</h1>
      <div><textarea value={text} onChange={(evt) => { setText(evt.target.value) }}></textarea></div>
      <div><button onClick={handleClick}>Add</button></div>
      <table>
        <thead><tr><td>TODO</td><td>Delete</td></tr></thead>
        <tbody>
          {list.map(
            (el, i) => {
              return (
                <tr key={i}><td>{el}</td><td>C</td></tr>
              )
            }
          )
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
