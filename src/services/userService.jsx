import axiosInstance from "../api/axiosInstance"

export const getAllUsers=async()=>{
    const res=await axiosInstance.get('/student/all')
    return res.data
}
