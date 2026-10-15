import { getStudentStatus } from "../utils/feeUtils";

const statusStyles = {
  Paid: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  Partial: "bg-amber-50 text-amber-700 ring-amber-600/20",
  Pending: "bg-rose-50 text-rose-700 ring-rose-600/20",
};

export default function FeeStatus({ student }) {
  const status = getStudentStatus(student);

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}