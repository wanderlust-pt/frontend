import {
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE
} from "../actions";

const initialState = {
  todos: [
    // {task: "', id: Date.now(), completed: false,}
  ],
  fetchingTodos: false,
  addingTodo: false,
  updatingTodo: false,
  deletingTodo: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_START:
      return {
        ...state,
        error: null,
        fetchingTodos: true
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        fetchingTodos: false,
        todos: action.payload
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        fetchingTodos: false,
        error: action.payload
      };
    case ADD_TODO_START:
      return {
        ...state,
        error: "",
        addingTodo: true
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        addingTodo: false,
        todos: action.payload
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingTodo: false
      };
    default:
      return state;
  }
};
export default reducer;
