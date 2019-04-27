import {
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_COMPLETED,
  DELETE_TODO
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
        todos: state.todos.map((todo, index) =>
          index === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case CLEAR_COMPLETED:
      return { todos: state.todos.filter(todo => todo.completed === false) };

      
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload)
      };
    default:
      return state;
  }
};
export default reducers;

// import {
//   FETCH_TODOS_START,
//   FETCH_TODOS_SUCCESS,
//   FETCH_TODOS_FAILURE,
//   ADD_TODO_START,
//   ADD_TODO_SUCCESS,
//   ADD_TODO_FAILURE,
//   DELETE_TODO_SUCCESS,
//   EDIT_TODO_SUCCESS,
//   TOGGLE_COMPLETED
// } from "../actions";

// import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from "../actions";

// const initialState = {
//   todos: []
// };
//   fetchingTodos: false,
//   addingTodo: false,
//   updatingTodo: false,
//   deletingTodo: false,
//   error: null
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_TODOS_START:
//       return {
//         ...state,
//         error: null,
//         fetchingTodos: true
//       };
//     case FETCH_TODOS_SUCCESS:
//       return {
//         ...state,
//         fetchingTodos: false,
//         todo: action.payload
//       };
//     case FETCH_TODOS_FAILURE:
//       return {
//         ...state,
//         fetchingTodos: false,
//         error: action.payload
//       };
//     case ADD_TODO_START:
//       return {
//         ...state,
//         error: "",
//         addingTodo: true
//       };
//     case ADD_TODO_SUCCESS:
//       return {
//         ...state,
//         addingTodo: false,
//         todo: [...state.todos, { value: action.payload, completed: false }]
//       };
//     case ADD_TODO_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//         addingTodo: false
//       };

//     case DELETE_TODO_SUCCESS:
//       return {
//         deletingTodo: false,
//         todos: state.todoList.filter((todo, index) => {
// if (index !== action.payload) {
//           return todo;
//         })
//       };

//     case EDIT_TODO_SUCCESS:
//       return {
//         ...state,
//         updatingTodo: false,
//         todo: action.payload
//       };
