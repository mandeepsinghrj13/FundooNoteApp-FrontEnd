import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
//import { Link } from "react-router-dom";
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
                <Button
                  id="submit" type="submit"color="primary"variant="contained"className="buttonStyle"fullWidth>
                 Sign In
                </Button>
              </Form>
            )}
          </Formik>
          <Typography >          
            <Button href=''  color='primary' variant = 'text'>Forgot password</Button>
          </Typography>
          <Typography>  
              <span className="marginTop"><Button className="next"href='/register'  color='primary' variant = 'text'>Create account</Button>
              <Button  href='/' color='primary' variant = 'contained'>Next</Button>
              </span>
          </Typography>
        </Paper>
      </Grid>
  );
};

export default Login;

