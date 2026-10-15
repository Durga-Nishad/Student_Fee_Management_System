# Student Fee Management System

<!-- ==================== HEADER ==================== -->

<h1 align="center">Student Fee Management System</h1>

<h3 align="center">
A React-Based Dashboard for Student Records and Fee Tracking
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-Frontend%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

<p align="center">
  A dashboard for organizing student fee records, tracking payments, and viewing fee collection summaries.
</p>

---

<!-- ==================== TABLE OF CONTENTS ==================== -->

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [How to Run the Application Locally](#how-to-run-the-application-locally)
- [Assumptions](#assumptions)
- [Known Limitations](#known-limitations)
- [SQL Questions and Answers](#sql-questions-and-answers)
- [Logic Questions and Explanations](#logic-questions-and-explanations)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

<!-- ==================== PROJECT OVERVIEW ==================== -->

## Project Overview

<div align="center">
<a href="https://student-fee-management-system-durganishad.vercel.app/">
  <img src="https://img.shields.io/badge/🌐%20Live-Demo-0072ff?style=for-the-badge" alt="Live Demo"/>
</a>

</div>

The **Student Fee Management System** is a web-based dashboard developed to organize student records and monitor fee payments through a centralized interface.

Managing student fee information manually can make it difficult to identify outstanding balances and review overall fee collection. This project demonstrates how a dashboard can present student information and fee-related summaries in a structured and accessible way.

The application uses React for the user interface, reusable components for maintainability, and JavaScript utility functions for data processing and fee calculations.

The current version uses sample student data stored in the frontend. An SQL script is included to support the database design component of the project.

### Project Objectives

- Display student records in a structured table.
- Provide an overview of total fees, collected fees, and outstanding balances.
- Make student records easier to search, filter, and sort.
- Keep UI components and business logic organized separately.
- Prepare a foundation for future backend and database integration.

---

#

<!-- ==================== FEATURES ==================== -->

## Features

- **Dashboard Summary:** Displays student and fee-related statistics.
- **Student Records:** Presents student information in a table.
- **Search:** Helps locate records using the supported search fields.
- **Filtering:** Filters records using the available criteria.
- **Sorting:** Organizes student records using the supported sorting options.
- **Fee Calculations:** Calculates fee summaries using reusable utility functions.
- **Reusable Components:** Separates the header, summary cards, search controls, and student table.
- **Sample Dataset:** Includes mock student records for demonstrating dashboard functionality.
- **SQL Script:** Includes an SQL file for initial database schema preparation.
- **Responsive Styling:** Uses Tailwind CSS utility classes to support different screen sizes.

---

<!-- ==================== TECHNOLOGIES ==================== -->

## Technologies Used

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| JavaScript (ES6+) | Application logic and data processing |
| Vite | Development server and production build |
| Tailwind CSS | Styling and responsive layouts |
| Lucide React | Dashboard icons |
| SQL | Database schema and query preparation |
| Node.js | JavaScript runtime used by the development tools |
| npm | Dependency management |
| Git and GitHub | Version control and source-code hosting |

---

<!-- ==================== PROJECT STRUCTURE ==================== -->

## Project Structure

```text
student-fee-management-system/
├── database/
│   └── student_fee_management.sql
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── DashboardHeader.jsx
│   │   ├── SummaryCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── StudentTable.jsx
│   ├── data/
│   │   └── students.js
│   ├── utils/
│   │   └── feeUtils.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*Note: This is the intended project structure. Keep the folder names and file names consistent with the actual repository.*

---

<!-- ==================== SETUP AND INSTALLATION ==================== -->

## Setup and Installation

### Prerequisites

Install the following software before running the application:

- Node.js and npm
- Visual Studio Code or another code editor
- Git (optional, for cloning the repository)

### Step 1: Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate to the application directory:

```bash
cd Student_Fee_Management_System/student-fee-management-system
```

Replace `<YOUR_GITHUB_REPOSITORY_URL>` with the actual repository URL. If the project is already on your computer, open its existing directory instead.

### Step 2: Install Dependencies

```bash
npm install
```

If `lucide-react` is missing from the project dependencies, install it with:

```bash
npm install lucide-react
```

Ensure that the required React, Vite, and Tailwind CSS packages are installed and configured in `package.json` and `vite.config.js`.

---

<!-- ==================== RUN LOCALLY ==================== -->

## How to Run the Application Locally

### Step 1: Open the Project Folder

Open the `student-fee-management-system` folder in Visual Studio Code.

### Step 2: Open the Integrated Terminal

Select **Terminal → New Terminal** in VS Code.

Make sure the terminal is inside the directory containing `package.json`.

### Step 3: Start the Development Server

Run the following command:

```bash
npm run dev
```

### Step 4: Open the Application

Vite displays a local development URL in the terminal. The default is usually:

```text
http://localhost:5173
```

Open the URL in your browser to view the dashboard.

### Step 5: Create a Production Build

To verify that the project can be built for production, run:

```bash
npm run build
```

Vite generates the production files in the `dist/` directory.

To preview the production build locally, run:

```bash
npm run preview
```

**Note:** The exact available npm commands depend on the scripts configured in `package.json`.

---

<!-- ==================== ASSUMPTIONS ==================== -->

## Assumptions

The following assumptions apply to the current implementation:

1. Student records are represented by the sample dataset in the frontend.
2. Fee amounts are numeric values.
3. The pending fee is calculated as the total fee minus the amount already paid.
4. The collected-fee summary is calculated from the payment amounts represented in the dataset.
5. Search, filtering, sorting, and summary calculations operate on the available frontend data.
6. The sample records are for demonstration purposes and do not represent real student information.
7. The SQL script is a starting point for database design and does not imply that a live database connection is configured.
8. Authentication, role-based authorization, and online payment processing are outside the scope of the current implementation.

---

<!-- ==================== KNOWN LIMITATIONS ==================== -->

## Known Limitations

- **Mock Data:** Student records are loaded from a local JavaScript file rather than a live database.
- **No Backend API:** The frontend does not currently communicate with a backend service.
- **No Live Database Connection:** The SQL script is provided separately; database connectivity is not implemented in the current dashboard.
- **No Persistent Updates:** Frontend-only changes, if supported, are not guaranteed to persist after refreshing the page.
- **No Authentication:** Login, user permissions, and role-based access are not implemented.
- **No Online Payments:** The application does not process real fee payments.
- **Basic Reporting:** Receipt generation and downloadable reports require additional development.
- **Production Validation:** More robust input validation, error handling, and data integrity checks would be required before real-world deployment.

---

<!-- ==================== SQL QUESTIONS AND ANSWERS ==================== -->

## SQL Questions and Answers

The following examples explain common SQL operations relevant to student fee management. The queries assume a table named `students` with columns such as `student_id`, `student_name`, `total_fee`, and `amount_paid`.

**Important:** Adjust the table and column names to match `database/student_fee_management.sql`. These examples are illustrative and should be checked against the actual assignment questions.

### Q1. How can we calculate the pending fee for each student?

**Answer:** Subtract the amount paid from the total fee.

```sql
SELECT
    student_id,
    student_name,
    total_fee,
    amount_paid,
    (total_fee - amount_paid) AS pending_fee
FROM students;
```

**Explanation:** The calculated `pending_fee` shows the outstanding balance for each student, assuming the stored values are valid.

### Q2. How can we calculate total fees, total collected fees, and total pending fees?

**Answer:** Use aggregate functions such as `SUM()`.

```sql
SELECT
    SUM(total_fee) AS total_fees,
    SUM(amount_paid) AS total_collected,
    SUM(total_fee - amount_paid) AS total_pending
FROM students;
```

**Explanation:**
- `SUM(total_fee)` calculates the total fee amount.
- `SUM(amount_paid)` calculates the amount collected.
- `SUM(total_fee - amount_paid)` calculates the outstanding balance.

This query assumes one row per student and that `amount_paid` stores the cumulative payment amount. If payments are stored in a separate transactions table, the collected amount should be calculated from that table.

### Q3. How can we find students who have pending fees?

**Answer:** Select students whose total fee is greater than the amount paid.

```sql
SELECT
    student_id,
    student_name,
    total_fee,
    amount_paid,
    (total_fee - amount_paid) AS pending_fee
FROM students
WHERE total_fee > amount_paid;
```

**Explanation:** The `WHERE` condition returns records with a positive outstanding balance.

### Q4. How can we find students who have fully paid their fees?

**Answer:** Select students whose amount paid is greater than or equal to the total fee.

```sql
SELECT
    student_id,
    student_name,
    total_fee,
    amount_paid
FROM students
WHERE amount_paid >= total_fee;
```

**Explanation:** These records represent students whose fee obligation has been met, assuming overpayment is permitted by the data model.

### Q5. How can we calculate payment status using SQL?

**Answer:** Use a `CASE` expression.

```sql
SELECT
    student_id,
    student_name,
    total_fee,
    amount_paid,
    CASE
        WHEN amount_paid >= total_fee THEN 'Paid'
        WHEN amount_paid > 0 THEN 'Partially Paid'
        ELSE 'Pending'
    END AS payment_status
FROM students;
```

**Explanation:** The query derives the payment status from the relationship between the total fee and the amount paid. The status is calculated when the query runs.

### Q6. How can we find the total number of students?

**Answer:** Use `COUNT()`.

```sql
SELECT COUNT(*) AS total_students
FROM students;
```

**Explanation:** `COUNT(*)` counts all records in the `students` table.

---

<!-- ==================== LOGIC QUESTIONS ==================== -->

## Logic Questions and Explanations

### Q1. How is the pending fee calculated?

The pending fee is calculated by subtracting the amount paid from the total fee.

```javascript
const pendingFee = totalFee - amountPaid;
```

For example, if the total fee is ₹20,000 and the amount paid is ₹12,000, the pending fee is ₹8,000.

In a production application, fee values should be validated to prevent invalid balances.

### Q2. How should the dashboard calculate fee summaries?

The dashboard should aggregate the student records and calculate:

- Total fees: Sum of all student fee amounts.
- Total collected: Sum of the amounts paid.
- Total pending: Sum of the outstanding balances.

These calculations should use a consistent dataset and the same fee definitions throughout the application.

### Q3. Why separate utility functions from React components?

Separating business logic from UI components improves readability, maintainability, and testability.

For example, `feeUtils.js` can contain fee calculations and student filtering logic, while `SummaryCard.jsx` focuses on displaying a metric.

This separation also makes the calculation functions easier to test independently.

### Q4. Why use reusable React components?

Reusable components avoid duplicating the same UI markup. For example, a single `SummaryCard` component can display multiple metrics by receiving different labels and values through props.

This makes the interface easier to update and maintain.

### Q5. How does search and filtering improve the dashboard?

Search helps locate specific student records, while filtering narrows the dataset according to criteria such as payment status. Sorting organizes the displayed results.

Together, these operations help users review student fee information more efficiently.

---

<!-- ==================== FUTURE IMPROVEMENTS ==================== -->

## Future Improvements

- Integrate a backend REST API.
- Connect the application to a MySQL database.
- Add student registration, editing, and deletion.
- Maintain a separate fee-payment transaction history.
- Implement authentication and role-based authorization.
- Generate fee receipts and export reports to CSV or PDF.
- Add pagination for larger datasets.
- Introduce automated tests and stronger validation.
- Deploy the application to a hosting platform.

These are planned enhancements and are not claimed as implemented features.

---

<!-- ==================== AUTHOR ==================== -->

## Author

**Durga Nishad**

GitHub: [Durga-Nishad](https://github.com/Durga-Nishad)

---

<p align="center">
  Built as a web development project to practise React, JavaScript, component-based UI development, and SQL fundamentals.
</p>
