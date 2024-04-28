import { useState } from "react"
import Counter from "./components/Counter"
import './App.css'

function App() {
  const [ initialCount, setInitialCount ] = useState(0)
  return (
    <div>
      <Counter initialCount={initialCount} />
    </div>
  )
}

export default App
