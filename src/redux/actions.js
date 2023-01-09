export const REGISTER = "REGISTER";
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
