import { LOGIN, REGISTER } from "./actions";

const initialState = {
  users: [],
  user: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      window.localStorage.setItem("idAos", action.payload.id);
      return {
        ...state,
        users: [...state.users, action.payload],
        user: action.payload,
      };

    case LOGIN:
      return {
        ...state,
        user: state.users.filter(user => user.email === action.payload.email)[0]
      }

    default:
      return state;
  }
}

export default rootReducer;
