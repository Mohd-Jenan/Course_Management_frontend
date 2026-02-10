import { BookOpen, Users, ClipboardList, GraduationCap } from "lucide-react";
import { useState } from "react";
import ProfileSidebar from "./profileSidebar";
import NavItem from "./Sidebar";
import StatCard from "./StatCard"
import CourseItem from "./CourseItem";
import AssignmentItem from "./AssignmentItem";

export default function StudentDashboard() {
  const[openProfile, setOpenProfile]=useState(false)
  const user=JSON.parse(localStorage.getItem("user"))
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6 text-xl font-bold text-indigo-600">
          EduManage
        </div>
        <nav className="px-4 space-y-2">
          <NavItem title="Dashboard" />
          <NavItem title="Courses" />
          <NavItem title="Assignments" />
          <NavItem title="Submissions" />
          <NavItem title="Profile" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
           <button
          onClick={() => setOpenProfile(true)}
          className="w-10 h-10 rounded-full bg-indigo-600 text-white
          flex items-center justify-center font-semibold cursor-pointer"
        >
          {user?.name?.charAt(0).toUpperCase()}
        </button>
        </header>
        <ProfileSidebar 
        isOpen={openProfile}
        onClose={()=>setOpenProfile(false)}
        user={user}
        />

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <StatCard icon={<BookOpen />} title="Courses" value="6" />
          <StatCard icon={<ClipboardList />} title="Assignments" value="14" />
          <StatCard icon={<GraduationCap />} title="Completed" value="9" />
          <StatCard icon={<Users />} title="Students" value="120" role="admin" />
        </section>

        {/* Content Sections */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Courses */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">My Courses</h2>
            <ul className="space-y-3">
              <CourseItem title="Data Structures" teacher="John Doe" />
              <CourseItem title="Web Development" teacher="Jane Smith" />
              <CourseItem title="Database Systems" teacher="Alex Brown" />
            </ul>
          </div>

          {/* Assignments */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Pending Assignments</h2>
            <ul className="space-y-3">
              <AssignmentItem title="DSA Assignment 1" status="Pending" />
              <AssignmentItem title="React Quiz" status="Submitted" />
              <AssignmentItem title="MongoDB MCQs" status="Evaluated" />
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}






