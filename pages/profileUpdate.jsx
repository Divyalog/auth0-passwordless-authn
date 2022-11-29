import { redirect } from 'next/dist/server/api-utils';
import React from 'react';


export default function PageWithoutJSbasedForm() {
    const handleSubmit = async (event) => {
    
        
    }
    return (
        <form action="https://auth0-passwordless-authn.herokuapp.com/profile" method="POST">
        <center><label htmlFor="company_name">Company Name</label></center>
        <center><input type="text" id="company_name" name="company_name" required /></center>
        <br></br>
        <center><label htmlFor="job_title">Job Title</label></center>
        <center><input type="text" id="job_title" name="job_title" required /></center>
        <br></br>
        <br></br>
        <center><button type="submit">Submit</button></center>
      </form>
    )
  }
