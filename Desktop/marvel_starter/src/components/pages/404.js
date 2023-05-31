import { Link } from "react-router-dom"
//simple 404 page
const Page404 = () =>{
  return(
    <div>
      <p>Not Found</p>
      <Link to="/">Back to Main Page</Link>
    </div>
  )
}
export default Page404