export default function NavItem({ title,onClick }) {
  return (
    <div onClick={onClick} className="px-4 py-2 rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer">
      {title}
    </div>
  );
}