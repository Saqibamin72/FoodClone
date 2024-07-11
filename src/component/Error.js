import { useRouteError } from "react-router-dom"

const Error=()=>{
    // const err=useRouteError();
    // const{status,statusText}=err;
    const{status,statusText}=useRouteError();
    return(
       <div>
       <h1>
        oops,Something went wrong!!!</h1>
        <h1>{status}:{statusText}</h1>
        </div>
    )
}
export default Error;