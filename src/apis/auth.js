import axios from "axios";
const baseURL = "http://localhost:5000";

export const userLogin=async({ email, password })=>{
    try {
        const reqUrl='${baseURL}/';
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


export const updateName = async ({ name }) => {
  try {
    const reqUrl = `${baseURL}/update/name/`;
    const reqPayload = { name };
    console.log(reqPayload);
    const response = await axios.patch(reqUrl, reqPayload,axiosConfig);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = async ({ oldPassword,newPassword }) => {
  try {
    const reqUrl = `${baseURL}/update/password/`;
    const reqPayload = { oldPassword,newPassword };
    const response = await axios.patch(reqUrl, reqPayload,axiosConfig);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};