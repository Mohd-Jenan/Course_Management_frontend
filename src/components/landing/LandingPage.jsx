import { BookOpen, Users, GraduationCap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-indigo-600">EduManage</h1>
        <div className="space-x-6">
          <a href="#features" className="text-gray-600 hover:text-indigo-600">
            Features
          </a>
          <a href="#about" className="text-gray-600 hover:text-indigo-600">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600">
            Contact
          </a>
          <button
            className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-4xl font-extrabold mb-4">
          Student Course Management Made Easy
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Manage students, courses, enrollments, and progress in one powerful
          platform.
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 text-indigo-600 bg-white rounded-xl font-semibold hover:bg-gray-100">
          Get Started <ArrowRight size={18} />
        </button>
      </section>

      {/* Features */}
      <section id="features" className="px-8 py-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Core Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Users className="text-indigo-600" />}
            title="Student Management"
            description="Add, update, track students and their academic details easily."
          />
          <FeatureCard
            icon={<BookOpen className="text-indigo-600" />}
            title="Course Management"
            description="Create courses, assign instructors, and manage schedules seamlessly."
          />
          <FeatureCard
            icon={<GraduationCap className="text-indigo-600" />}
            title="Enrollment & Progress"
            description="Monitor enrollments, grades, and student progress in real-time."
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Why EduManage?</h3>
          <p className="text-gray-600 text-lg">
            EduManage is a centralized student course management platform that
            helps institutions manage students, courses, enrollments, and
            academic progress. It provides secure, role-based access and
            streamlines academic workflows for administrators, instructors, and
            students.
          </p>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="px-8 py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">Contact Us</h3>
          <p className="text-center text-gray-600 mb-12">
            Have questions or want to request a demo? Reach out to us and our
            team will get back to you shortly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg">Support Email</h4>
                <p className="text-gray-600">support@edumanage.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-600">+91 9820765645</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Office Hours</h4>
                <p className="text-gray-600">
                  Monday – Friday, 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
            <form className="bg-white p-6 rounded-2xl shadow space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer
        id="contact"
        className="px-8 py-6 text-center bg-gray-900 text-gray-300"
      >
        <p>© {new Date().getFullYear()} EduManage. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <div className="mb-4 text-3xl">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
