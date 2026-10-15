import { Search } from "lucide-react";

export default function SearchBar({
  searchTerm,
  onSearchChange,
  pendingOnly,
  onPendingChange,
  sortByPending,
  onSortChange,
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <label className="relative block w-full lg:max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by name, email, course or ID..."
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={pendingOnly}
            onChange={(event) => onPendingChange(event.target.checked)}
            className="size-4 accent-blue-600"
          />
          Pending fees only
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={sortByPending}
            onChange={(event) => onSortChange(event.target.checked)}
            className="size-4 accent-blue-600"
          />
          Highest pending first
        </label>
      </div>
    </div>
  );
}