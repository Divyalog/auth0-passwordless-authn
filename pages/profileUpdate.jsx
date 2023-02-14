import React from 'react';

export default function Items(props) {

    return (
        <form action='http://localhost:3000/newtest' method='GET'>
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

  