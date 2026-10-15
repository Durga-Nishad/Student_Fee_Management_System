import { useMemo, useState } from "react";
import {
  Users,
  Wallet,
  CircleDollarSign,
  Clock3,
} from "lucide-react";

import DashboardHeader from "./components/DashboardHeaders.jsx";
import SummaryCard from "./components/SummaryCard.jsx";
import SearchBar from "./components/SearchBar.jsx";
import StudentTable from "./components/StudentTable.jsx";
import { students } from "./data/students.js";
import {
  calculateFeeSummary,
  filterAndSortStudents,
} from "./utils/feeUtils";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pendingOnly, setPendingOnly] = useState(false);
  const [sortByPending, setSortByPending] = useState(false);

  const summary = useMemo(
    () => calculateFeeSummary(students),
    []
  );

  const visibleStudents = useMemo(
    () =>
      filterAndSortStudents(
        students,
        searchTerm,
        pendingOnly,
        sortByPending
      ),
    [searchTerm, pendingOnly, sortByPending]
  );

  const summaryCards = [
    {
      title: "Total Students",
      value: summary.totalStudents,
      icon: Users,
      color: "bg-blue-50 text-blue-700",
    },
    {
      title: "Total Fees",
      value: summary.totalFees,
      type: "currency",
      icon: Wallet,
      color: "bg-violet-50 text-violet-700",
    },
    {
      title: "Total Collected",
      value: summary.totalCollected,
      type: "currency",
      icon: CircleDollarSign,
      color: "bg-emerald-50 text-emerald-700",
    },
    {
      title: "Total Pending",
      value: summary.totalPending,
      type: "currency",
      icon: Clock3,
      color: "bg-rose-50 text-rose-700",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <DashboardHeader />

        <section
          aria-label="Fee summary"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {summaryCards.map((card) => (
            <SummaryCard key={card.title} {...card} />
          ))}
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="space-y-5 border-b border-slate-100 p-5 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Student fee records
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Search, filter and review payment status.
                </p>
              </div>

              <p className="text-sm text-slate-500">
                Showing{" "}
                <span className="font-semibold text-slate-800">
                  {visibleStudents.length}
                </span>{" "}
                of {students.length} students
              </p>
            </div>

            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              pendingOnly={pendingOnly}
              onPendingChange={setPendingOnly}
              sortByPending={sortByPending}
              onSortChange={setSortByPending}
            />
          </div>

          <StudentTable students={visibleStudents} />
        </section>

        <footer className="pb-2 text-center text-xs text-slate-400">
          Student Fee Management Dashboard · React + Tailwind CSS · Demo data
        </footer>
      </div>
    </main>
  );
}