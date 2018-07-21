const initialState = {
  data: null
}

const userReducer = (state = initialState, action) => {
  if (action.type === 'USER_LOGGED_IN')
  {
    return Object.assign({}, state, {
      data: action.payload
    })
  }

  if (action.type === 'USER_LOGGED_OUT')
  {
    return Object.assign({}, state, {
      data: null
    })
  }

  // Attestations
  if (action.type === 'IDENTITY_ATTESTATION')
  {
    return Object.assign({}, state, {
      data: action.payload
    })
  }

  return state
}

export default userReducer
