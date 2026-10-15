import { GraduationCap } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-blue-600 p-3 text-white shadow-sm">
          <GraduationCap size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Student Fee Management
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Monitor student fees, collections and outstanding balances.
          </p>
        </div>
      </div>

      <span className="w-fit rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
        Sample data · Demo
      </span>
    </header>
  );
}