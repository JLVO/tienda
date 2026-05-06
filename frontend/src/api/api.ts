import axios from "axios";
//crear un instancia
const api = axios.create({
    //url de base del backend
    baseURL:"http://localhost:3000/api",
    //headers por defecto
    headers:{
        "Content-Type":"application/json",
    },
});
//ejecutar antes de cada petición
api.interceptors.request.use((config)=>{
    const token =localStorage.getItem("token");
    if(token){
        config.headers.Authorization = token;
    }
    return config;
});
export default api;