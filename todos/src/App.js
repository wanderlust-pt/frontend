import React, { Component } from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Welcome to your Todo App!</h1>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;

// After getting the url
// import React, { Component } from "react";
// import "./App.css";
// import TodoList from "./TodoList";
// import AddTodo from "./AddTodo";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Login from "./Login";
// import PrivateRoute from "./PrivateRoute";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <nav>
//             <p>
//               <Link to="/login">Login</Link>
//             </p>
//             <p>
//               <Link to="/protected">Todos</Link>
//             </p>
//           </nav>
//           <Route exact path="/login" component={Login} />
//           <PrivateRoute exact path="/protected" component={TodoList} />
//           <PrivateRoute exact path="/protected" component={AddTodo} />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
