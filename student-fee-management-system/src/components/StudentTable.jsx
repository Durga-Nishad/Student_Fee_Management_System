

import { useEffect, useState } from "react";
import { formatCurrency } from "../utils/feeUtils";
import FeeStatus from "./FeeStatus.jsx";
import Pagination from "./Pagination.jsx";

const PAGE_SIZE = 10;

function StudentTable({ students = [] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(students.length / PAGE_SIZE);

  // Reset to page 1 when the filtered student list changes
  useEffect(() => {
    setCurrentPage(1);
  }, [students]);

  // Keep the page valid if the number of students changes
  const safePage = Math.min(
    currentPage,
    Math.max(totalPages, 1)
  );

  const startIndex = (safePage - 1) * PAGE_SIZE;

  const currentStudents = students.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  const firstStudent =
    students.length === 0 ? 0 : startIndex + 1;

  const lastStudent = Math.min(
    startIndex + PAGE_SIZE,
    students.length
  );

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-4 font-semibold">Student</th>
              <th className="px-5 py-4 font-semibold">Course</th>
              <th className="px-5 py-4 text-right font-semibold">
                Total Fee
              </th>
              <th className="px-5 py-4 text-right font-semibold">
                Paid
              </th>
              <th className="px-5 py-4 text-right font-semibold">
                Pending
              </th>
              <th className="px-5 py-4 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {currentStudents.map((student) => (
              <tr
                key={student.id}
                className="transition hover:bg-slate-50"
              >
                <td className="px-5 py-4">
                  <div className="font-semibold text-slate-800">
                    {student.name}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {student.email}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    ID: {student.id}
                  </div>
                </td>

                <td className="px-5 py-4 text-slate-600">
                  {student.course}
                </td>

                <td className="px-5 py-4 text-right font-medium">
                  {formatCurrency(student.totalFee)}
                </td>

                <td className="px-5 py-4 text-right text-emerald-700">
                  {formatCurrency(student.paidAmount)}
                </td>

                <td className="px-5 py-4 text-right font-semibold text-rose-600">
                  {formatCurrency(student.pendingAmount)}
                </td>

                <td className="px-5 py-4">
                  <FeeStatus student={student} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {students.length === 0 && (
          <div className="px-5 py-14 text-center">
            <p className="font-semibold text-slate-700">
              No students found
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Try another search term or change your filters.
            </p>
          </div>
        )}
      </div>

      {students.length > 0 && (
        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          firstStudent={firstStudent}
          lastStudent={lastStudent}
          totalStudents={students.length}
        />
      )}
    </div>
  );
}

export default StudentTable;
