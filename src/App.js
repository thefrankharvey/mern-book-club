import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import CreateUser from "./components/create-user.component";
import BooksList from "./components/book-list.component";
import EditBook from "./components/create-book.component";
import CreateBook from "./components/create-book.component";
import Login from "./components/login.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/user" component={CreateUser} />
      <Route path="/" exact component={BooksList} />
      <Route path="/edit/:id" component={EditBook} />
      <Route path="/create" component={CreateBook} />
      <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;


