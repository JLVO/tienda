import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    
    const navigate=useNavigate();
    const {login}=useAuth();

    //Enviamos el login
    const handleLogin =async(e:React.SubmitEvent)=>{
        e.preventDefault();
    const res = await api.post("/auth/login",{
        username,
        password,
    });

    //guardar el token
    login(res.data.token,res.data.user);

    //redirigir al dashboard
    navigate("/dashboard");
    };
    return(
         <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow w-80">

        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Email"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 mb-3 rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Ingresar
        </button>

      </form>

    </div>
    );
}
export default Login;