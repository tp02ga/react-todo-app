import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoApp, { addItem } from "./Components/TodoApp/todoApp";
import Dashboard from "./Components/Dashboard/dashboard";
import PageNotFound from "./Components/PageNotFound/pageNotFound";

function App() {
  /**
   *    <App>
   *      <TodoApp>
   *        <Header>
   *        <Footer>
   *      <UserDashboard>
   *        <Header>
   *        <Footer>
   *
   */
  addItem();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TodoApp />;
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
