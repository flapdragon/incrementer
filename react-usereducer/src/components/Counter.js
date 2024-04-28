import { useState } from "react"
// import Button from "./Button"

const Counter = ({ initialCount }) => {
  const [ count, setCount ] = useState(initialCount)
  const [ customAmount, setCustomAmount ] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const handleCustomAmount = (event) => {
    const value = parseInt(event.target.value) || 0
    setCustomAmount(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setCount(count + customAmount)
    setCustomAmount(0)
  }

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Add a custom amount</label>
          <input
            id="custom"
            type="number"
            value={customAmount || ""}
            onChange={handleCustomAmount}
            />
        </div>
        <button>Add!</button>
      </form>
    </div>
  )
}

export default Counter