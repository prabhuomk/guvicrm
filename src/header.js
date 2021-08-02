import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export function Header() {
  const history = useHistory();
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3>GUVI CRM</h3>
          </div>
          <div>
            <Button onClick={() => history.push("/")} color="inherit">
              HOME
            </Button>
            <Button onClick={() => history.push("/signup")} color="inherit">
              signup
            </Button>
            <Button onClick={() => history.push("/login")} color="inherit">
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
