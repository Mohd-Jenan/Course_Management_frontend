import axiosInstance from "../api/axiosInstance";

export const getAllCourses = async () => {
  const res = await axiosInstance.get('/course/all')
  return res.data;
};
export const createCourse = async (payload) => {
  const res = await axiosInstance.post('/course/create',payload)
  return res.data;
};

export const updateCourse = async (_id,payload) => {
  const res = await axiosInstance.put(`/course/update/${_id}`,payload)
  return res.data;
};

export const deleteCourse = async (_id) => {
  const res = await axiosInstance.delete(`/course/delete/${_id}`)
  return res.data;
};

export const dashboadCounts=async()=>{
  const res=await axiosInstance.get('/course/counts')
  return res.data
}