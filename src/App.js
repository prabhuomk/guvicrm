import "./styles.css";
import { Header } from "./header";
import { Switch, Route } from "react-router-dom";
import { FirstPage } from "./FirstPage";
import { SignUp } from "./signup";
import { Login } from "./login";
import { Main } from "./main";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <FirstPage />
        </Route>
        <Route exact path="/signup">
          <Header />
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Header />
          <Login />
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}
