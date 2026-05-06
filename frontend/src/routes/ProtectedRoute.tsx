import {Navigate} from "react-router-dom";


//Protege las rutas privadas
function ProtectedRoute({children}:{children:React.ReactNode})
{
    const token = localStorage.getItem("token");

    //si no hay token
    if(!token){
        return <Navigate to="/login"/>;
    }
    return children;
}
export default ProtectedRoute;