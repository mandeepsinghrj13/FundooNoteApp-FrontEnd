import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FundooHeader from '../../Components/FundooHeader';
import { ErrorMessage ,Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import '../Login/login.scss';
const Login = () => {
  const initialValues = {
    email: "",
    Password: "",
  };

  const onSubmits = (values, props) => {
    console.log(values);
    props.resetForm()
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email address").required("Required"),
    Password: Yup.string().required("Required"),
  });

  return ( 
      <Grid className="display-center">
        <Paper elevation={12} className="paperstyle">
          <Grid align="center">
            <FundooHeader/>
            <h2 className="header">Sign In</h2>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmits}
          >
            {(props) => (
              <Form >
                <Field
                  as={TextField} label="Email" name="email" variant="outlined" fullWidth
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  as={TextField} label="Password"  name="Password" variant="outlined" type="password"fullWidth
                  helperText={<ErrorMessage name="Password" />}
                />
                <Button
                  type="submit"color="primary"variant="contained"className="buttonStyle"fullWidth>
                 Sign In
                </Button>
              </Form>
            )}
          </Formik>
          <Typography >
            <Link to="">Forgot password</Link>
          </Typography>
          <Typography>
            Create a new account ? 
            <Link to="/register">
              <span > Create account </span>
            </Link>
          </Typography>
        </Paper>
      </Grid>
  );
};

export default Login;

