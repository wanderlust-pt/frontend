import { ADD_TODO } from "../actions";

const initialState = {
  todoItems: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodoItem = {
        todoItem: action.payload,
        // completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todoItems: [...state.todoItems, newTodoItem]
      };

    default:
      return state;
  }
}
export default reducer;
