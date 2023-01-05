import { useRouter } from "next/router";

export default function Items(props) {
  var router = useRouter();
  var id = router.query["company_name"];
  var id2 = router.query["job_title"];
  console.log(router);
  return (
    <form id="submitform" action="/api/shows">
    <div>
      <h1>Welcome User</h1>
      <p>value:{id}</p>
      <p>value:{id2}</p>
      <center><button type="submit">Submit</button></center>
    </div>
    </form>
  );
}