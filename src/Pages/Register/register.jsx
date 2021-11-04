import React from 'react'
import { Grid, Paper, Typography, TextField, Button,Link } from '@material-ui/core'
import FundooHeader from "../../Components/FundooHeader";
import "../Register/register.scss";
const SignUp = () => {
    const btnstyle = { margin: "10px 0px", padding:"7px 70px" };
    return(     
        <Grid>
        <Paper elevation = {10} className = "paperStyle">
          <Grid align="center">
          <FundooHeader/>
          </Grid>    
          <Grid>
            <TextField label="FirstName" placeholder="FirstName" type="text"  required />
            </Grid>
            <Grid>
            <TextField label="LastName" placeholder="LastName" type="text"  required /> 
            </Grid>     
            <Grid>
            <TextField label="Email" placeholder="Email" type="email" required />
            </Grid>
            <Grid>
            <TextField label="Password" placeholder="Enter password" type="password"  required />
            </Grid>
            <Grid>
              <Button  type="submit" color="primary" variant="contained"size="large" style={btnstyle} >
                Sign in
              </Button> 
              </Grid>  
              <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?<Link href="/">Sign in instead</Link>
        </Typography>
                <Typography>
                <div className="register-avatar">
                    <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt=''></img>
                </div>
                </Typography>                 
        </Paper>        
        </Grid>
    )
}

export default SignUp;