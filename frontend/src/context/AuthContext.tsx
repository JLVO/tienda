import { createContext,useContext,useState,ReactNode } from "react";

interface User{
    id:number;
    username:string;
}

interface AuthContextType{
    user: User | null;
    login:(token:string,user:User)=>void;
    logout:()=>void;
}

//crear un contexto
const AuthContext=createContext<AuthContextType | null>(null);

//hook para enviar personalizado
export const useAuth=()=>useContext(AuthContext);
export const useProvider=({children}:{children:React.ReactNode})=>{
    const [user,setUser]=useState<User | null>(null);

    //Guardar la session
    const login=(token:string,user:User)=>{
        localStorage.setItem("token",token);
        setUser(user);
    };

    //Eliminar la session
    const logout=()=>{
        localStorage.removeItem("token");
        setUser(null);
    };

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
        );
    };