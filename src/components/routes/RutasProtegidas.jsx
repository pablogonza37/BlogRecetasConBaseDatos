import { Navigate } from "react-router";

const RutasProtegidas = ({children}) => {
    const administrador = JSON.parse(sessionStorage.getItem('usuarioRollingRecetas')) || null;
    if(!administrador){
        return <Navigate to={'/login'}></Navigate>
    }else{
        return children
    }
};

export default RutasProtegidas;