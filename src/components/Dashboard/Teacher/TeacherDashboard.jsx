import ProfileSidebar from "../Student/profileSidebar";
import { useState } from "react";
import NavItem from "../Student/Sidebar";
const TeacherDashboard = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const user=JSON.parse(localStorage.getItem("user"))
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6 text-xl font-bold text-indigo-600">EduManage</div>
        <nav className="px-4 space-y-2">
          <NavItem title="Dashboard" />
          <NavItem title="Courses" />
          <NavItem title="Assignments" />
          <NavItem title="Students" />
          
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
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
          onClose={() => setOpenProfile(false)}
          user={user}
        />

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 text-sm">Total Courses</p>
            <h2 className="text-3xl font-bold text-indigo-600">6</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 text-sm">Assignments</p>
            <h2 className="text-3xl font-bold text-green-600">18</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 text-sm">Students</p>
            <h2 className="text-3xl font-bold text-blue-600">145</h2>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

          <ul className="space-y-3 text-gray-600">
            <li>✅ Created assignment “JavaScript Basics”</li>
            <li>👨‍🎓 10 students enrolled in React Course</li>
            <li>📝 Reviewed assignment submissions</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default TeacherDashboard;
