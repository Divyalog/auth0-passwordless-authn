var axios = require("axios").default;
import { useRouter } from "next/router";
const jwt = require('jsonwebtoken');

export default function updateUserProfile(props) {
  console.log("Entering updateUserProfile method");
  const router = useRouter();
  const id = router.query["company_name"];
  const id2 = router.query["job_title"]; 
  const id3 = props.session_token;
  updateUser(id, id2, id3);
  console.log("Exiting updateUserProfile method");
return (
  <form>
          <center><h1>Welcome to Auth0</h1></center><br></br><br></br>
          <h4>Below are the values that you have updated</h4>
          <p><b>Company Name:</b> {id}</p>
          <p><b>Job Title:</b> {id2}</p><br></br><br></br>
          <center><h2>Click Log In button to access your profile</h2></center> 
        </form>
      )
}

function updateUser(id, id2, session) {
  let userDetail;
  var userId;
  try{
  userDetail = jwt.verify(session, process.env.AUTH0_SECRET);
  userId = userDetail.sub;
  console.log(`Jwt token verification is success for this user: ${userId}`);
} catch (e){
  console.log('Error in verifying jwt token');
}
var options = {
  method: 'PATCH',
  url: `https://testtenantpasswordlessauthentication.us.auth0.com/api/v2/users/${userId}`,
  headers: {authorization: process.env.BEARER_TOKEN, 'content-type': 'application/json'},
  data: {
    "user_metadata": {
      "companyName": id,
      "jobTitle": id2
    }
  }
};

axios.request(options).then(function (response) {
  console.log("User update successful");
  return response.data;
}).catch(function (error) {
  console.log("User update failed");
  return error;
});
}

export const getServerSideProps = (context) => {
  var session_token = context.query["session_token"];
  return {
    props: {
      session_token,
    },
  };
}
