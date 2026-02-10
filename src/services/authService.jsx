import axiosInstance from "../api/axiosInstance"

export const LoginUser=async(loginData)=>{
    const response= await axiosInstance.post("/student/login",loginData)
    return response.data
}

export const SignupUser=async(signupData)=>{
    const response= await axiosInstance.post("/student/create-user",signupData)
    return response.data
}

