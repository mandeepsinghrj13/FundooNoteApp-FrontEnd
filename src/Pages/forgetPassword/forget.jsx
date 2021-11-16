import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./forget.scss";
import FundooHeader from '../../Components/FundooHeader';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forget } from "../../Services/NoteServices.js";

const ForgotPassword = () => {
  const initialValues = {
    email: "",
  };
  const history = useHistory();

  const onSubmits = (values, props) => {
    forget(values)
      .then((res) => {
        setTimeout(() => {
          props.resetForm();
          history.push("../resetPassword");
        }, 2000);
        toast.success("email link sent succesfully ", {
          autoClose: 2000,
        });
      })
      .catch((error) => {
         console.log(error);
         toast.error("Please enter valid email", {
          autoClose: 2000,
        });
      });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please Enter valid email")
      .required("Email Required"),
  });
  return (
    <Grid className="display-center">
      <Paper elevation={8} className="paperStyleFP">
        <Grid align="center">
          <FundooHeader />
          <h3 className="fontDesign" data-testid="header1">Find your email</h3>
          <h4 className="fontDesign" data-testid="header2">Enter your recovery email</h4>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmits}
        >
          {(props) => (
            <Form data-testid="form">
              <Field
                as={TextField}  data-testid="email" label="Email"  name="email"  variant="outlined"  fullWidth className="tfStyle"  helperText={<ErrorMessage name="email" />}
              />
              <Grid container className="buttonStyle1" >
                <Button  type="submit"  color="primary"  variant="contained"  fullWidth>  Next</Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
      <ToastContainer />
    </Grid>
  );
};

export default ForgotPassword;