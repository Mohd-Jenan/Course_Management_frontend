export default function CourseItem({ title, teacher }) {
  return (
    <li className="flex justify-between items-center">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">Teacher: {teacher}</p>
      </div>
      <button className="text-indigo-600 text-sm">View</button>
    </li>
  );
}