const firstNames = [
  "Aarav", "Priya", "Rahul", "Ananya", "Rohan",
  "Sneha", "Aditya", "Pooja", "Aman", "Kavya",
];

const lastNames = [
  "Sharma", "Verma", "Sahu", "Patel", "Gupta",
  "Yadav", "Nishad", "Singh", "Jain", "Soni",
];

export const students = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const fee = 12000 + (id % 6) * 3000;
  const paymentType = id % 4;

  let paidAmount = 0;

  if (paymentType === 1) paidAmount = 3000;
  if (paymentType === 2) paidAmount = 5000;
  if (paymentType === 3) paidAmount = fee;

  return {
    id,
    name: `${firstNames[index % firstNames.length]} ${
      lastNames[Math.floor(index / firstNames.length) % lastNames.length]
    } ${Math.ceil(id / 100)}`,
    email: `student${id}@example.com`,
    course: ["BCA", "B.Sc. IT", "MCA", "B.Tech"][
      index % 4
    ],
    totalFee: fee,
    paidAmount,
    pendingAmount: fee - paidAmount,
  };
});