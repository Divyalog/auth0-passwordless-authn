import React from 'react';
import { useRouter } from "next/router";

export default function progressiveProf() {
  var router = useRouter();
  var id = router.query["session_token"];
  const url = `${process.env.AUTH0_BASE_URL}/newtest`;
    return (
        <form action={url} method='GET'>
                <center><h1>Complete your Profile!</h1></center><br></br><br></br>
                <center>We need you to complete your profile to personalize your experience.</center><br></br>
                <center><label htmlFor="company_name">Company Name</label></center>
                <center><input type="text" id="company_name" name="company_name" required /></center>
                <br></br>
                <center><label htmlFor="job_title">Job Title</label></center>
                <center><input type="text" id="job_title" name="job_title" required /></center>
                <p hidden><input type="text" name="session_token" value={id} /></p>
                <br></br>
                <br></br>
                <center><button type="submit">Submit</button></center>
              </form>
            )
  }
