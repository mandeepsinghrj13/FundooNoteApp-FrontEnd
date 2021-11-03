import React from "react";
import { Grid, Paper, TextField, Button, Typography, Link } from "@material-ui/core";
import FundooHeader from "../../Components/FundooHeader"


const Login = () => {
  const btnstyle = { margin: "20px 0" };
  return (
    <Grid>
      <Paper className="paperStyle" elevation={10} >
      <Grid align="center">
                    <FundooHeader/>
                </Grid>
        <TextField label="Email" placeholder="Enter email" fullWidth required />
        <TextField label="Password" placeholder="Enter password" type="password" fullWidth required />
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
