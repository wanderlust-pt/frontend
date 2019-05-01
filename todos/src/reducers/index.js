import {
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_COMPLETED,
  DELETE_TODO,
  EDIT_TODO,
  //UPDATE_START,
  UPDATE_TODO
} from "../actions";

const initialState = {
  todos: []
};
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { id: action.payload, text: action.payload, completed: false }
        ]
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case CLEAR_COMPLETED:
      return { todos: state.todos.filter((todo) => todo.completed === false) };

    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };

    case EDIT_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, editing: true } : todo
        )
      };

    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text, editing: false }
            : todo
        )
      };

    default:
      return state;
  }
};
export default reducers;

//after url
// import {
//   FETCH_START,
//   FETCH_SUCCESS,
//   ADD_SUCCESS,
//   UPDATE_START,
//   UPDATE_SUCCESS,
//   DELETE_SUCCESS,
//   ERROR,
//   TOGGLE_TODO,
//   CLEAR_COMPLETED,
//   LOGIN_START,
//   LOGIN_SUCCESS
// } from "../actions";

// const initialState = {
//   fetching: false,
//   editing: null,
//   todos: [],
//   error: null,
//   loggingIn: false,
//   token: localStorage.getItem("token")
// };

// const reducers = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_START:
//       return {
//         ...state,
//         loggingIn: true
//       };
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         loggingIn: false
//         //token: action.payload
//       };
//     case FETCH_START:
//       return { ...state, fetching: true };
//     case FETCH_SUCCESS:
//       return {
//         ...state,
//         fetching: false,
//         todos: [...state.todos, ...action.payload]
//       };
//     case ADD_SUCCESS:
//       return {
//         ...state,
//         todos: [...action.payload]
//       };
//     case UPDATE_START:
//       return {
//         ...state,
//         editing: action.payload
//       };
//     case UPDATE_SUCCESS:
//       return {
//         ...state,
//         editing: null,
//         todos: [...action.payload]
//       };

//     case DELETE_SUCCESS:
//       return {
//         ...state,
//         todos: [...action.payload]
//       };
//     case ERROR:
//       return {
//         ...state,
//         fetching: false,
//         editing: null,
//         error: action.payload
//       };
//     case TOGGLE_TODO:
//       return {
//         todos: state.todos.map(todo =>
//           todo.id === action.payload
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         )
//       };
//     case CLEAR_COMPLETED:
//       return {
//         todos: state.todos.filter(todo => todo.completed !== true)
//       };
//     default:
//       return state;
//   }
// };
// export default reducers;
