import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllUsers } from "../../services/userService";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Users</h1>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow">
        {/* Table Header */}
        <div className="grid grid-cols-5 gap-4 px-6 py-4 border-b text-sm font-semibold text-gray-600">
          <span>Name</span>
          <span>Email</span>
          <span>Role</span>
          <span>Age</span>
          <span className="text-right">Action</span>
        </div>

        {/* Loader */}
        {loading && (
          <div className="p-6 text-center text-gray-500">
            Loading users...
          </div>
        )}

        {/* Empty State */}
        {!loading && users.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No users found
          </div>
        )}

        {/* Table Rows */}
        {!loading &&
          users.map((user) => (
            <div
              key={user._id}
              className="grid grid-cols-5 gap-4 px-6 py-4 border-b last:border-none text-sm items-center hover:bg-gray-50 transition"
            >
              {/* Name */}
              <div>
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-xs text-gray-500">
                  Joined {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>

              {/* Email */}
              <p className="text-gray-600 truncate">{user.email}</p>

              {/* Role */}
              <span
                className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium w-fit
                  ${
                    user.role === "admin"
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
              >
                {user.role}
              </span>

              {/* Status */}
              <span
                className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium w-fit
                  ${
                    user.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
              >
                {user.age}
              </span>

              {/* Actions */}
              <div className="flex justify-end gap-2">
                <button className="px-3 py-1.5 text-xs border rounded text-indigo-600 border-indigo-600 hover:bg-indigo-50">
                  View
                </button>
                <button className="px-3 py-1.5 text-xs border rounded text-red-500 border-red-500 hover:bg-red-50">
                  Block
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllUsers;
