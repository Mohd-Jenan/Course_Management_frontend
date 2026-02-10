import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser} from "../../../services/authService";
import toast from "react-hot-toast";

const Login = () => {
    const[formData,setFormData]=useState({email:"",password:""})

    const navigate=useNavigate()

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const submitForm=async(e)=>{
        e.preventDefault()
        try{
          const data=await LoginUser(formData)
          localStorage.setItem("token",data.token)
          localStorage.setItem("role", data.user.role);
          localStorage.setItem("user", JSON.stringify(data.user));

          const role=data.user.role

          if (role === "student") navigate("/student/dashboard");
          if (role === "teacher") navigate("/teacher/dashboard");
          if (role === "admin") navigate("/admin/dashboard");

          toast.success("Login Successful")

          // navigate("/dashboard")
        }
        catch(err){
          console.error(err);
          const errMsg=err.response?.data?.message || "Invalid email or password";
          toast.error(errMsg)
        }
        
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        <form onSubmit={submitForm}>
          <input 
            type="email" 
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-4"
            value={formData.email}
            onChange={handleChange}
          />
          
          <input 
            type="password" 
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-4"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="text-sm text-center mb-2">
            New user?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Signup
            </span>
          </p>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
