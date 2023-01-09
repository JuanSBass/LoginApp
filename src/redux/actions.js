export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
let idCounter = 0;

export const register = (user) => {
  return function (dispatch) {
    console.log(user);
    if (idCounter === 0)
    dispatch({
      type: REGISTER,
      payload: {...user, id: ++idCounter, admin: true}
    })
    else dispatch({
      type: REGISTER,
      payload: {...user, id: ++idCounter}
    })
  }
};

export const login = (user) => {
  return function (dispatch) {
    dispatch({
      type: LOGIN,
      payload: user
    })
  };
};
