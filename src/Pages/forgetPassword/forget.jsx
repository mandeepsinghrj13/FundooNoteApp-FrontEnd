import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./forget.scss";
import FundooHeader from '../../Components/FundooHeader';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forgot } from "../../Services/user.js";

const ForgotPassword = () => {
  const initialValues = {
    email: "",
  };
  const history = useHistory();

  const onSubmits = (values, props) => {
    forgot(values)
      .then((res) => {
        setTimeout(() => {
          props.resetForm();
          history.push("#");
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
      .required("email required"),
  });
  return (
    <Grid className="display-center">
      <Paper elevation={8} className="paperStyleFP">
        <Grid align="center">
          <FundooHeader />
          <h3 className="fontDesign">Find your email</h3>
          <h4 className="fontDesign">Enter your recovery email</h4>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmits}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}  label="Email"  name="email"  variant="outlined"  fullWidth className="tfStyle"  helperText={<ErrorMessage name="email" />}
              />
              <Grid container className="buttonStyle1" sm={12}>
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