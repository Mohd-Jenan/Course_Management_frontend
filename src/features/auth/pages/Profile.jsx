const Profile = () => {

const user=JSON.parse(localStorage.getItem("user"))

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Profile</h1>
        <p className="text-sm text-gray-500">
          Manage your personal information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT – Profile Summary */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-indigo-600 text-white
                          flex items-center justify-center text-5xl font-bold mb-4">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>

          <span className="mt-3 px-4 py-1 text-sm rounded-full
                           bg-indigo-100 text-indigo-600 font-semibold">
            {user.role}
          </span>

          <button className="mt-6 w-full border border-indigo-600
                             text-indigo-600 py-2 rounded-lg
                             hover:bg-indigo-50 transition">
            Change Avatar
          </button>
        </div>

        {/* RIGHT – Details */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">

          <h3 className="text-lg font-semibold mb-4">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm text-gray-500">Full Name</label>
              <div className="mt-1 font-medium text-gray-800">
                {user.name}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <div className="mt-1 font-medium text-gray-800">
                {user.email}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">Age</label>
              <div className="mt-1 font-medium text-gray-800">
                {user.age}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">Role</label>
              <div className="mt-1 font-medium text-gray-800 capitalize">
                {user.role}
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg
                         hover:bg-indigo-700 transition">
              Edit Profile
            </button>

            <button
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg
                         hover:bg-gray-300 transition">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
