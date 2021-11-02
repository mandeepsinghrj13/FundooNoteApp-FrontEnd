import React from "react";
import { Grid, Paper, TextField, Button, Typography, Link } from "@material-ui/core";
const Login = () => {
  const paperStyle = { padding: 20, height: "60vh", width: 310, margin: "70px auto" };
  const btnstyle = { margin: "20px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>FundooNotesApp</h2>
        </Grid>
        <TextField label="Username" placeholder="Enter username" fullWidth required />
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
