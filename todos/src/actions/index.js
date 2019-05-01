export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    payload: id
  };
};
export const updateTodo = (todo) => {
  return { type: UPDATE_TODO, payload: todo };
};

//After getting url

// export const FETCH_START = "FETCH_START";
// export const FETCH_SUCCESS = "FETCH_SUCCESS";
// export const ADD_SUCCESS = "ADD_SUCCESS ";
// export const UPDATE_START = "UPDATE_START ";
// export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
// export const DELETE_SUCCESS = "DELETE_SUCCESS";
// export const ERROR = "ERROR";
// export const TOGGLE_TODO = "TOGGLE_TODO";
// export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
// export const LOGIN_START = "LOGIN_START";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

// export const handleLogin = creds => dispatch => {
//   dispatch({ type: LOGIN_START });
//   return axios.post("http://localhost:5000/api/login", creds).then(res => {
//     localStorage.setItem("token", res.data.payload);
//     dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
//   });
// };

// export const getTodos = () => dispatch => {
//   dispatch({ type: FETCH_START });
//   axios
//     .get("https://wunderlist-20.herokuapp.com/todos", {
//       headers: { Authorization: localStorage.getItem("token") }
//     })
//     .then(response => {
//       dispatch({ type: FETCH_SUCCESS, payload: response.data });
//     })
//     .catch(error => {
//       dispatch({ type: ERROR, payload: error });
//     });
// };

// export const addTodo = text => dispatch => {
//   axios
//     .post("https://wunderlist-20.herokuapp.com/todos", text)
//     .then(response => {
//       dispatch({ type: ADD_SUCCESS, payload: response.data });
//     })
//     .catch(error => {
//       dispatch({ type: ERROR, payload: error });
//     });
// };

// export const updatingTodo = id => dispatch => {
//   dispatch({ type: UPDATE_START, payload: id });
// };

// export const editTodo = edited => dispatch => {
//   axios
//     .put(`${"https://wunderlist-20.herokuapp.com/todos"}/${edited.id}`, edited)
//     .then(response => {
//       dispatch({ type: UPDATE_SUCCESS, payload: response.data });
//     })
//     .catch(error => {
//       dispatch({ type: ERROR, payload: error });
//     });
// };

// export const deleteTodo = id => dispatch => {
//   axios
//     .delete(`${"https://wunderlist-20.herokuapp.com/todos"}/${id}`)
//     .then(response => {
//       dispatch({ type: DELETE_SUCCESS, payload: response.data });
//     })
//     .catch(error => {
//       dispatch({ type: ERROR, payload: error });
//     });
// };

// export const toggleTodo = id => {
//   return {
//     type: TOGGLE_TODO,
//     payload: id
//   };
// };

// export const clearCompleted = () => {
//   return {
//     type: CLEAR_COMPLETED
//   };
// };
