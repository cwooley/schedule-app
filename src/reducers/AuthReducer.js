import { EMAIL_CHANGED } from '../actions/types'

export default (state = {email: '', password: ''}, action) => {
  switch (action.type){
    case EMAIL_CHANGED:
      return {email: action.payload, ...state}
    default:
      return state
  }
}
