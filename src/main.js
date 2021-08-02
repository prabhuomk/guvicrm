import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export function Main() {
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
            <Button color="inherit">LEAD</Button>
            <Button color="inherit">CONTACTS</Button>
            <Button color="inherit">ACCOUNTS</Button>
            <Button color="inherit">DEALS</Button>
            <Button color="inherit">ACTIVITIES</Button>
            <Button color="inherit">REPORT</Button>
            <Button color="inherit">MARKETPLACE</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
