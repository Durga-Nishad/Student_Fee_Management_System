
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  firstStudent,
  lastStudent,
  totalStudents,
}) {
  if (totalStudents === 0) return null;

  return (
    <div className="flex flex-col gap-4 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-slate-500">
        Showing{" "}
        <span className="font-semibold text-slate-700">
          {firstStudent}–{lastStudent}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-slate-700">
          {totalStudents}
        </span>{" "}
        students
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-lg border px-3 py-2 text-sm disabled:opacity-40"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={currentPage === page ? "page" : undefined}
              className={`min-w-9 rounded-lg border px-3 py-2 text-sm ${
                currentPage === page
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-lg border px-3 py-2 text-sm disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
