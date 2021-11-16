import React from "react";
import resetPassword from "../../Services/NoteServices";
import FundooHeader from '../../Components/FundooHeader';
import "../ResetPassword/resetPassword.scss";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "../ResetPassword/resetPassword.scss"

const ResetPassword = () => {

  const initialValues = {
    Password: "",
    ConfirmPassword:"",
  };
  const history = useHistory();

  const onSubmits = (values, props) => {
    resetPassword(values)
      .then((res) => {
        setTimeout(() => {
          props.resetForm();
          history.push("../login");
        }, 2000);
        toast.success("Password Reset Succesfully ", {
          autoClose: 2000,
        });
      })
      .catch((error) => {
         console.log(error);
         toast.error("Password Not Reset Somting Error", {
          autoClose: 2000,
        });
      });
  };

  const validationSchema = Yup.object().shape({
    Password: Yup.string()
      .required("Password Required"),
      ConfirmPassword: Yup.string()
      .required("ConfirmPassword Required"),
  });
  return (
    <Grid className="display-center">
      <Paper elevation={8} className="paperStyles">
        <Grid align="center">
          <FundooHeader />
          <h3 className="fontDesign" data-testid="header1">Reset Password</h3>
          <h4 className="fontDesign" data-testid="header2">Use your Fundoo Account</h4>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmits}
        >
          {(props) => (
            <Form >
              <Field
                as={TextField}   label="Password"  name="Password"  variant="outlined"  fullWidth className="tfStyle"  helperText={<ErrorMessage name="Password" />}
              />
              <Field
                as={TextField}   label="ConfirmPassword"  name="ConfirmPassword"  variant="outlined"  fullWidth className="tfStyle"  helperText={<ErrorMessage name="ConfirmPassword" />}
              />
              <Grid container className="buttonStyle1" >
                <Button  type="submit"  color="primary"  variant="contained"  fullWidth>  Password</Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
      <ToastContainer />
    </Grid>
  );
};
export default ResetPassword;
