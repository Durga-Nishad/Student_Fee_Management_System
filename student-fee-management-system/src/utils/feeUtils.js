export function calculateFeeSummary(students) {
  return students.reduce(
    (summary, student) => ({
      totalStudents: summary.totalStudents + 1,
      totalFees: summary.totalFees + student.totalFee,
      totalCollected: summary.totalCollected + student.paidAmount,
      totalPending: summary.totalPending + student.pendingAmount,
    }),
    {
      totalStudents: 0,
      totalFees: 0,
      totalCollected: 0,
      totalPending: 0,
    }
  );
}

export function getStudentStatus(student) {
  if (student.pendingAmount <= 0) return "Paid";
  if (student.paidAmount > 0) return "Partial";
  return "Pending";
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function filterAndSortStudents(
  students,
  searchTerm,
  pendingOnly,
  sortByPending
) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filtered = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(normalizedSearch) ||
      student.email.toLowerCase().includes(normalizedSearch) ||
      student.course.toLowerCase().includes(normalizedSearch) ||
      String(student.id).includes(normalizedSearch);

    const matchesPending = !pendingOnly || student.pendingAmount > 0;

    return matchesSearch && matchesPending;
  });

  if (sortByPending) {
    filtered.sort((a, b) => b.pendingAmount - a.pendingAmount);
  }

  return filtered;
}