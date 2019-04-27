export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: text
  };
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

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

//import axios from "axios";

// export const FETCH_TODOS_START = "FETCH_TODOS_START";
// export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
// export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

// export const getTodos = () => (dispatch) => {
//   dispatch({ type: FETCH_TODOS_START });
//   axios
//     .get("http://localhost:3333/todos/") //need the link
//     .then((response) =>
//       dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data })
//     )
//     .catch((error) => dispatch({ type: FETCH_TODOS_FAILURE, payload: error }));
// };

// export const ADD_TODO_START = "ADD_TODO_START";
// export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
// export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";

// export const addTodo = (text) => (dispatch) => {
//   dispatch({ type: ADD_TODO_START });
//   axios
//     .post("https://wunderlist-20.herokuapp.com/", text) //need the link
//     .then((response) =>
//       dispatch({ type: ADD_TODO_SUCCESS, payload: response.data })
//     )
//     .catch((error) => dispatch({ type: ADD_TODO_FAILURE, payload: error }));
// };

// export const DELETE_TODO_START = "DELETE_TODO_START";
// export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
// export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";

// export const deleteTodo = (id) => (dispatch) => {
//   dispatch({ type: DELETE_TODO_START });
//   axios
//     .delete(`https://wunderlist-20.herokuapp.com//${id}`) //need the link
//     .then((response) =>
//       dispatch({ type: DELETE_TODO_SUCCESS, payload: response.data })
//     )
//     .catch((error) => dispatch({ type: DELETE_TODO_FAILURE, payload: error }));
// };

// export const EDIT_TODO_START = "EDIT_TODO_START";
// export const EDIT_TODO_SUCCESS = "EDIT_TODO_SUCCESS";
// export const EDIT_TODO_FAILURE = "EDIT_TODO_FAILURE";

// export const editTodo = (id, updatedTodo) => (dispatch) => {
//   dispatch({ type: EDIT_TODO_START });
//   axios
//     .put(`https://wunderlist-20.herokuapp.com//${id}`, updatedTodo) //need the link
//     .then((response) =>
//       dispatch({ type: EDIT_TODO_SUCCESS, payload: response.data })
//     )
//     .catch((error) => dispatch({ type: EDIT_TODO_FAILURE, payload: error }));
// };
