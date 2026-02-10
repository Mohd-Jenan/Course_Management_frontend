import { useNavigate } from "react-router-dom";

const ProfileSidebar = ({isOpen,onClose,user}) => {
  const navigate = useNavigate();
  const handleProfile=()=>{
    navigate('/profile')
  }
  const handleLogout=()=>{
    localStorage.removeItem("token")
    navigate('/login')


  }
  

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 text-center">

          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <div className="border-t px-6 py-4 space-y-3">
          <button onClick={handleProfile} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
            Profile
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default ProfileSidebar;
