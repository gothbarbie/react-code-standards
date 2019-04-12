const initialState = {
  user: {
    isLoggedIn: false,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
        },
      }

    default:
      return state
  }
}
