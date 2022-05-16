import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)


  return <GithubContext.Provider value={{
    ...state,
    dispatch,
  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext



/* Get Search Results
 const fetchUsers = async () => {
  setLoading()

  const res = await fetch(`${GITHUB_URL}/users`)
  const data = await res.json()

  dispatch({
    type: 'GET_USERS',
    payload: data
  })

}
 */