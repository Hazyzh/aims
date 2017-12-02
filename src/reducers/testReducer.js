const initstate = {
  a: 'assss'
}
/**
 * test reducer
 * @param  {object}  [state={}] initstate
 * @param  {Object} action     action
 * @return {object}             same as the initstate
 */
const test = (state = initstate, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default test
