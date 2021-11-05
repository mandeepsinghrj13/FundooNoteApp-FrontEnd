import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import FundooHeader from '../../Components/FundooHeader';
import { ErrorMessage ,Formik, Field, Form} from 'formik';
import * as yup from 'yup';
import '../Login/login.scss';

const Login =() => {
    return (
        <Formik
        initialValues ={{
            emailId:'',
            password:''
          }}
          validationSchema ={ yup.object({
            emailId: yup.string().email('Invalid Email address').required('Required'),
            password:yup.string().required('Required')
    
          })}
          onSubmit = {(values,props)=>{
            console.log(values);
            props.resetForm()
         }}
          >
        {formik =>(
        <Grid>
            <Paper elevation={12} className="paperstyle" >
                <Grid align="center">
                    <FundooHeader/>
                <h2 className="header">Sign In</h2>
                </Grid>
                <Form onSubmit={formik.handleSubmit}> 
                     <Field id="emailId"
                      as = {TextField} 
                      name = 'emailId'label="Email" variant="outlined"size="small"
                      onChange = {formik.handleChange} onBlur = {formik.handleBlur}
                      value={formik.values.emailId} helperText = {<ErrorMessage name = 'emailId'/>} fullWidth
                      required/>
                      
                    <Field
                      as = {TextField}
                      name="password" id="password" label="Password" type="password" fullWidth variant="outlined" size="small"
                      onChange = {formik.handleChange}
                      helperText = {<ErrorMessage name = 'password'/>}
                      value={formik.values.password}
                      required  margin="normal" 
                    />
                      
                  <Typography>                  
                    <Button type = "Submit" color = "primary" variant = "contained"  className='signIn' fullWidth>
                      Sign In
                    </Button>
                  </Typography>
                <p className='register'><Button href='/register' color='primary' variant = 'text'>Create account</Button></p>          
                </Form>
            </Paper>
        </Grid>
        )}
        </Formik>
    )
}

export default Login;

