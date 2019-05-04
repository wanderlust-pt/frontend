import axios from "axios";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_SUCCESS = "ADD_SUCCESS ";
export const UPDATE_START = "UPDATE_START ";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const ERROR = "ERROR";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_START = "USERS_START";

export const handleLogin = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://wunderlist-20.herokuapp.com/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    });
};

export const addUsers = newUser => dispatch => {
  dispatch({ type: USERS_START });
  return axios
    .post(`https://wunderlist-20.herokuapp.com/register`, newUser)
    .then(response => {
      dispatch({ type: USERS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
};

export const getTodos = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`https://wunderlist-20.herokuapp.com/todos/list`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      // localStorage.setItem("token", response.data.payload);
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
};

export const addTodo = item => dispatch => {
  axios
    .post(`https://wunderlist-20.herokuapp.com/todos/create`, item, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      // localStorage.setItem("token", response.data.payload);
      dispatch({ type: ADD_SUCCESS, payload: item });
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
};

export const updatingTodo = id => dispatch => {
  dispatch({ type: UPDATE_START, payload: id });
};

export const editTodo = edited => dispatch => {
  axios
    .put(
      `${`https://wunderlist-20.herokuapp.com/todos/edit`}/${edited.id}`,
      edited,
      {
        headers: { Authorization: localStorage.getItem("token") }
      }
    )

    .then(response => {
      dispatch({ type: UPDATE_SUCCESS, payload: edited });
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
};

export const deleteTodo = id => dispatch => {
  axios
    .delete(`${`https://wunderlist-20.herokuapp.com/todos/delete`}/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      dispatch({ type: DELETE_SUCCESS, payload: id });
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
};

export const toggleTodo = id => {
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
