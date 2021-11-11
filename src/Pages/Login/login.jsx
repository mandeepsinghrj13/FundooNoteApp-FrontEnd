import React from "react";
import { Grid, Paper, TextField, Button,Typography } from "@material-ui/core";
import {BrowserRouter as Router } from "react-router-dom";
import FundooHeader from '../../Components/FundooHeader';
import { ErrorMessage ,Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import '../Login/login.scss';
import { UserNode } from "../../Services/user";
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const userNode = new UserNode ()
const Login = () => {
  const initialValues = {
    email: "",
    Password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email address").required("Email Required"),
    Password: Yup.string().required("Password Required"),
  });
  const onSubmits = (values, props) => { 
    userNode.login(values)
       .then((res) => {
         props.resetForm()
         localStorage.setItem('token', res.data.token);
         toast.success("Login Successfull");
      }).catch((error) => {
        toast.error(error.message);
      });
  };

  return ( 
    <Router>
      <Grid className="display-center">
        <Paper elevation={12} className="paperstyle">
          <Grid align="center">
            <FundooHeader/>
            <h2 className="header" data-testid="signIn">Sign In</h2>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmits}
          >
            {(props) => (
              <Form  data-testid="form">
                <Field
                  as={TextField}className="formclass" data-testid="email" label="Email" name="email" variant="outlined" fullWidth
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}className="formclass" data-testid="password" label="Password"  name="Password" variant="outlined" type="password"fullWidth
                  helperText={<ErrorMessage name="Password" />}
                />
                <div className="buttonConteners">
                <Button className="next" type="button" to="/register" color='primary' variant = 'text'>Create account</Button>
                <Button
                  data-testid="submit" type="submit" color="primary" variant="contained" className="buttonStyle" fullWidth>
                 Sign In
                </Button>
                </div>
              </Form>
            )}
          </Formik>
          <Typography >          
            <Button href=''  color='primary' variant = 'text'>Forgot password</Button>
          </Typography>
          
          
        </Paper>
      </Grid>
      <ToastContainer />
      </Router>    
  );
};
export default Login;
