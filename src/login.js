import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const UserSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
});

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(UserSchema)
  });
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const adduser = (data) => {
    fetch("https://guvi-crm.herokuapp.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((data) => data.json())
      .then((data) => {
        setOpen(true);
        history.push("/main");
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="form">
      <TextField
        id="outlined-basic"
        label="Enter user name"
        variant="outlined"
        {...register("username")}
        error={errors?.username?.message}
        helperText={errors?.username?.message}
      />
      <br />
      <br />

      <TextField
        id="outlined-basic"
        label="enter the password"
        variant="outlined"
        {...register("password")}
        error={errors?.password?.message}
        helperText={errors?.password?.message}
      />
      <br />
      <br />
      <Button
        onClick={handleSubmit(adduser)}
        variant="contained"
        color="primary"
      >
        LOGIN
      </Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          login successfully
        </Alert>
      </Snackbar>
    </div>
  );
}
