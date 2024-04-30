import { useReducer } from "react"

const Counter = ({ initialCount }) => {

  const INCREMENT_COUNT = "increment-count"
  const DECREMENT_COUNT = "decrement-count"
  const CHANGE_CUSTOM_AMOUNT = "change-custom-amount"
  const ADD_CUSTOM_AMOUNT = "add-custom-amount"
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT:
        return {
          ...state,
          count: state.count + 1
        }
      case DECREMENT_COUNT:
        return {
          ...state,
          count: state.count - 1
        }
      case CHANGE_CUSTOM_AMOUNT:
        return {
          ...state,
          customAmount: action.payload
        }
      case ADD_CUSTOM_AMOUNT:
        return {
          ...state,
          count: state.count + action.payload,
          customAmount: 0
        }
      default:
        // throw new Error(`Unexpected action type: ${action.type}`)
        return state
    }
  }

  const [ state, dispatch ] = useReducer(reducer, {
    count: initialCount,
    customAmount: 0
  })

  const handleIncrement = (event) => {
    dispatch({
      type: INCREMENT_COUNT
    })
  }

  const handleDecrement = (event) => {
    dispatch({
      type: DECREMENT_COUNT
    })
  }
  
  const handleCustomAmountChange = (event) => {
    const value = parseInt(event.target.value) || 0
    dispatch({
      type: CHANGE_CUSTOM_AMOUNT,
      payload: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({
      type: ADD_CUSTOM_AMOUNT,
      payload: state.customAmount
    })
  }

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Add custom amount:</label>
            <input
              id="custom-amount"
              type="number"
              value={state.customAmount || ""}
              onChange={handleCustomAmountChange}
              />
          </div>
          <div>
            <button>Add!</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Counter