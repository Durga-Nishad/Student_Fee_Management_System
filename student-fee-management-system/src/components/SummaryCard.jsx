import { formatCurrency } from "../utils/feeUtils";

export default function SummaryCard({
  title,
  value,
  type = "number",
  icon: Icon,
  color,
}) {
  const displayValue =
    type === "currency" ? formatCurrency(value) : value.toLocaleString("en-IN");

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {displayValue}
          </p>
        </div>

        <div className={`rounded-xl p-3 ${color}`}>
          <Icon size={22} />
        </div>
      </div>
    </article>
  );
}