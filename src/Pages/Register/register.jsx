import React from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'
import { ErrorMessage ,Formik, Field, Form} from 'formik';
import FundooHeader from "../../Components/FundooHeader";
import { UserNode } from "../../Services/user";
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
import "../Register/register.scss";
import * as Yup from "yup";
const userNode = new UserNode();
const SignUp = () => {
  const history = useHistory();
  const initialValuesSignUp = {
    firstName: "",
    lastName: "",
    email: "",
    Password: "",
    ConfirmPassword: "",
  };
 const validationSchemaSignUp = Yup.object().shape({
    firstName: Yup.string()   
      .required(" FirstName Required"),
    lastName: Yup.string()  
      .required("LastName Required"),
    email: Yup.string()
      .email("Enter valid Email")
      .required("Email Required"),
    Password: Yup.string() 
      .required("Password Required"),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("Password")], "Password not matched")
      .required("ConfirmPassword Required"),
  });

  const onSubmitSignUP = (values, props) => {
    userNode
      .register(values)
      .then((res) => {
        props.resetForm()
        setTimeout(()=>{
          history.push("/login");
        },4000);
        toast.success("register successfully verify your email");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (   
      <Grid className="display-center">
        <Paper elevation={20} className="paperStyleSignUP">
          <Grid container spacing={2}>
            <Grid item sm={6} md={6}>
              <Grid>
                <FundooHeader />
                <h2 className="headerStyle" data-testid="headerForSignup" >
                  Create your Fundoo Account
                </h2>
              </Grid>
              <Formik
                initialValues={initialValuesSignUp}
                validationSchema={validationSchemaSignUp}
                onSubmit={onSubmitSignUP}
              >
                {(props) => (
                  <Form data-testid="formForSignUp">
                    <Grid container spacing={2}>
                      <Grid item sm={6}>
                        <Field
                          as={TextField}
                          fullWidth label="First Name" name="firstName" variant="outlined" data-testid="FirstNameSignUp" className="bottomMargin"
                          helperText={<ErrorMessage name="firstName" />}
                        />
                      </Grid>
                      <Grid item sm={6}>
                        <Field
                          as={TextField}
                          fullWidth label="Last Name" name="lastName" variant="outlined" data-testid="LastNameSignUp" className="bottomMargin"
                          helperText={<ErrorMessage name="lastName" />}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                      <Grid item sm={12}>
                        <Field
                          as={TextField}
                          fullWidth label="Email"  name="email" variant="outlined" data-testid="EmailSignUp" className="bottomMargin"
                          helperText={<ErrorMessage name="email" />}
                        />
                        <Grid className="Text">
                          You can use letters, numbers & periods
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item sm={6}>
                        <Field
                          as={TextField}
                          fullWidth variant="outlined" label="Password" name="Password" data-testid="PasswordSignUp" type="password"
                          helperText={<ErrorMessage name="Password" />} className="bottomMargin"
                        />
                      </Grid>
                      <Grid item sm={6}>
                        <Field
                          as={TextField}
                          fullWidth variant="outlined" label="Confirm Password" name="ConfirmPassword" data-testid="confirmPasswordSignUp" type="password"
                          helperText={<ErrorMessage name="ConfirmPassword" />} className="bottomMargin"
                        />
                      </Grid>
                      <Grid className="Text1">
                        Use 8 or more characters with a mix of letters, numbers
                        & symbols
                      </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                      <Grid item sm={12}>
                        <Button
                           type="submit" variant="contained" color="primary" fullWidth
                        >
                          Sign Up
                        </Button>    
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
              <p className="marginTop">Already have an account ? <Button to='/' color='primary' variant = 'text'>Login</Button></p>
            </Grid>
            <Grid item sm={6} md={6}>
              <img
                className="IMG"
                src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
                alt=""
              />
              <p className="imgContain">One account. All of Google Working for you</p>
            </Grid>
          </Grid>
        </Paper>
        <ToastContainer />
      </Grid>
  );
};
export default SignUp;