import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './features/auth/pages/login'
import Signup from './features/auth/pages/signup'
import LandingPage from './components/landing/LandingPage'
import { Toaster } from 'react-hot-toast'
import ProtectedRoutes from './routes/ProtectedRoute'
import StudentDashboard from './components/Dashboard/Student/StudentDashboard'
import TeacherDashboard from './components/Dashboard/Teacher/TeacherDashboard'
import AdminDashboard from './components/Dashboard/Admin/AdminDashboard'
import Profile from './features/auth/pages/Profile'
import AllCourses from './components/courses/AllCourses'
function App() {
 

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<LandingPage/>} />
     <Route path='/login' element={<Login/>} />

     <Route path='/student/dashboard' element={
      <ProtectedRoutes allowedRoles={["student"]}>
      <StudentDashboard />
    </ProtectedRoutes>
      } 
      />
      <Route path='/teacher/dashboard' element={
      <ProtectedRoutes allowedRoles={["teacher"]}>
      <TeacherDashboard />
    </ProtectedRoutes>
      } 
      />
      <Route path='/admin/dashboard' element={
      <ProtectedRoutes allowedRoles={["admin"]}>
      <AdminDashboard />
    </ProtectedRoutes>
      } 
      />
      <Route path='/profile' element={<Profile/>} />

       <Route path='/signup' element={
      <ProtectedRoutes allowedRoles={["admin"]}>
      <Signup />
    </ProtectedRoutes>
      } 
      />
      <Route path='/allcourses' element={<AllCourses/>} />
    </Routes>
    </BrowserRouter>
      </> 
      
  )
}

export default App
