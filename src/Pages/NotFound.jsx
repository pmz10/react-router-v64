import { useRouteError, Link } from "react-router-dom";

const NotFound = () => { 
    const error = useRouteError();
    console.log(error);
        return(
            <>
                <h1>404</h1>
                <p>Page not found</p>
                <p>{error.statusText || error.message}</p>
                <Link to="/blog">Volver</Link>
            </>
        );
     };

     export default NotFound;
