import React from 'react';
import { useRouter } from "next/router";

export default function Items(props) {
    var router = useRouter();
    var id = router.query["session_token"];
    var id2 = router.query["state"];
    const url = `http://localhost:3000/api/auth/callback?state=${id2}`; 
    console.log({url}); 
    return (
        <form action={url} method='POST'>
                <center><label htmlFor="company_name">Company Name</label></center>
                <center><input type="text" id="company_name" name="company_name" required /></center>
                <br></br>
                <center><label htmlFor="job_title">Job Title</label></center>
                <center><input type="text" id="job_title" name="job_title" required /></center>
                <br></br>
                <br></br>
                <center><button type="submit">Submit</button></center>
                <p>value:{url}</p>  
              </form>
            )
  }

  