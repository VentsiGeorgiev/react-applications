import { ACTIONS } from "../App"


function digitButton({ dispatch, digit }) {
  return <button
    onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
  >
    {digit}
  </button>
}

export default digitButton
