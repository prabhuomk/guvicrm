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
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  password: yup.string().required()
});

export function SignUp() {
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
    setOpen(true);
    fetch("https://guvi-crm.herokuapp.com/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((data) => data.json())
      .then((data) => {
        setOpen(true);
        history.push("/");
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
        label="Enter the firstname"
        variant="outlined"
        {...register("firstname")}
        error={errors?.firstname?.message}
        helperText={errors?.firstname?.message}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Enter the lastname"
        variant="outlined"
        {...register("lastname")}
        error={errors?.lastname?.message}
        helperText={errors?.lastname?.message}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="create password"
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
        SIGN UP
      </Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          signup successfully done
        </Alert>
      </Snackbar>
    </div>
  );
}
