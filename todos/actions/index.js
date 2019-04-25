import axios from "axios";

export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

export const getTodos = () => (dispatch) => {
  dispatch({ type: FETCH_TODOS_START });
  axios
    .get("http://localhost:3333/todos/") //need the link
    .then((response) =>
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data })
    )
    .catch((error) => dispatch({ type: FETCH_TODOS_FAILURE, payload: error }));
};

export const ADD_TODO_START = "ADD_TODO_START";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";

export const addTodo = (newTodo) => (dispatch) => {
  dispatch({ type: ADD_TODO_START });
  axios
    .post("http://localhost:3333/todos/", newTodo) //need the link
    .then((response) =>
      dispatch({ type: ADD_TODO_SUCCESS, payload: response.data })
    )
    .catch((error) => dispatch({ type: ADD_TODO_FAILURE, payload: error }));
};
