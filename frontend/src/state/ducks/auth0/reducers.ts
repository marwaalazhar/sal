import Types, { Auth0ActionTypes } from './types';
const defaultState = {
  isLoading: true,
  errorMessage: null,
  accessToken: null,
  isAuthenticated: false,
  client: null
}

function auth0Reducer(state = defaultState, action: Auth0ActionTypes) {
  switch (action.type) {
    case Types.INIT_AUTH0_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      })
    case Types.INIT_AUTH0_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        client: action.payload.auth0Client,
        isAuthenticated: action.payload.isAuthenticated,
        accessToken: action.payload.accessToken,
      })
    case Types.INIT_AUTH0_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.error
      })
    default:
      return state;
  }
}

export default auth0Reducer;
