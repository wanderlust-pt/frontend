import {
  FETCH_START,
  FETCH_SUCCESS,
  ADD_SUCCESS,
  UPDATE_START,
  UPDATE_SUCCESS,
  DELETE_SUCCESS,
  ERROR,
  TOGGLE_TODO,
  CLEAR_COMPLETED,
  LOGIN_START,
  LOGIN_SUCCESS,
  USERS_SUCCESS
} from "../actions";

const initialState = {
  fetching: false,
  editing: null,
  todos: [],
  error: null,
  loggingIn: false,
  registering: false,
  token: localStorage.getItem("token")
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false
        //token: action.payload
      };
    case USERS_SUCCESS:
      return {
        ...state,
        registering: false
        //token: action.payload
      };
    case FETCH_START:
      return { ...state, fetching: true };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        todos: [...state.todos, ...action.payload]
      };
    case ADD_SUCCESS:
      return {
        ...state,
        editing: null,
        todos: [...state.todos, action.payload]
      };
    case UPDATE_START:
      return {
        ...state,
        editing: action.payload
      };
    case UPDATE_SUCCESS:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, task: action.payload.task, editing: false }
            : todo
        )
      };

    case DELETE_SUCCESS:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    case ERROR:
      return {
        ...state,
        fetching: false,
        editing: null,
        error: action.payload
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: todo.completed === 0 ? 1 : 0 }
            : todo
        )
      };
    case CLEAR_COMPLETED:
      return {
        todos: state.todos.filter((todo) => todo.completed === 0)
      };
    default:
      return state;
  }
};
export default reducers;
