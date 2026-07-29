import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../../../Providers/AuthProvider"

export const axiosSecure=axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
  const {userLogOut}= useContext(AuthContext)
  axiosSecure.interceptors.request.use(function(config){
    console.log('intercepted by Axios')
    const token=localStorage.getItem('access-token');
    config.headers.authorization=`Bearer ${token}`;
    return config
  },async function(error){
    return Promise.reject(error)
  }
)
  axiosSecure.interceptors.response.use(function(response){
    return response;
  },async(error)=>{
    const status=error.response?.status;
    if(status===401 || status===403){
      console.log('somethin wrong')
      await userLogOut()
    } return Promise.reject(error)
  })
  return axiosSecure
}

export default useAxiosSecure










