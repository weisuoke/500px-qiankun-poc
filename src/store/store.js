import { initGlobalState } from "qiankun";

const initialState = {
  user: {
    name: 'qiankun'
  }
}

const actions = initGlobalState(initialState)

actions.offGlobalStateChange((state, prev) => {
  for (const key in state) {
    initialState[key] = state[key]
  }
})

actions.getGlobalState = (key) => {
  return key ? initialState[key] : initialState
}

export default actions