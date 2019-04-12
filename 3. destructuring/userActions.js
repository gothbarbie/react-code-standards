const USER_LOGIN = 'USER_LOGIN'

const loginUser = () => ({
  type: USER_LOGIN,
})

// Destructuring getState
export const login = (dispatch, getState) => {
  const state = getState()

  if (!state.user.isLoggedIn) {
    dispatch(loginUser())
  }
}
