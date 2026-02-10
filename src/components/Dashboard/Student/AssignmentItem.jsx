export default function AssignmentItem({ title, status }) {
  const statusColor =
    status === "Pending"
      ? "text-yellow-600"
      : status === "Submitted"
      ? "text-blue-600"
      : "text-green-600";

  return (
    <li className="flex justify-between items-center">
      <p>{title}</p>
      <span className={`text-sm font-medium ${statusColor}`}>{status}</span>
    </li>
  );
}