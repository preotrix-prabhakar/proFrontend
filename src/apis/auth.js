import axios from "axios";
const baseURL = "http://localhost:5000";

export const userLogin=async({ email, password })=>{
    try {
        const reqUrl='${baseURL}/login';
        const reqPayload={ email ,password};
        const response = await axios.post(reqUrl,reqPayload);
        return response
    } catch (error) {
        
    }
}
export const userRegister=async({name,email,password})=>{
    try {
    
        const reqUrl = `${baseURL}/register`;
        const reqPayload = { name, email, password };
        const response = await axios.post(reqUrl, reqPayload);
        return response.data;
      } catch (error) {
        console.log(error);
      }
}
// export const loginUser = async ({ email, password }) => {
//     try {
//       const reqUrl = `${baseURL}/login`;
//       const reqPayload = { email, password };
//       const response = await axios.post(reqUrl, reqPayload);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   };