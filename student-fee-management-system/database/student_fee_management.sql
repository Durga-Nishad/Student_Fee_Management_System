CREATE DATABASE IF NOT EXISTS student_fee_management;
USE student_fee_management;

-- Drop child table first because it references students.
DROP TABLE IF EXISTS payments;
DROP TABLE IF EXISTS students;

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    course VARCHAR(80) NOT NULL,
    total_fee DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_total_fee CHECK (total_fee >= 0)
);

CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date DATE NOT NULL,
    payment_method VARCHAR(30) NOT NULL,
    payment_reference VARCHAR(50) NOT NULL UNIQUE,
    CONSTRAINT chk_payment_amount CHECK (amount > 0),
    CONSTRAINT fk_payments_student
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE
);

-- Seed 100 sample students and multiple payment records.
DROP PROCEDURE IF EXISTS seed_student_fee_data;

DELIMITER $$

CREATE PROCEDURE seed_student_fee_data()
BEGIN
    DECLARE i INT DEFAULT 1;
    DECLARE fee_amount DECIMAL(10, 2);
    DECLARE student_name VARCHAR(100);
    DECLARE student_course VARCHAR(80);
    DECLARE payment_count INT;
    DECLARE payment_number INT;
    DECLARE payment_amount DECIMAL(10, 2);

    WHILE i <= 100 DO
        SET fee_amount = 12000 + (i MOD 6) * 3000;

        SET student_name = CONCAT(
            ELT(
                ((i - 1) MOD 10) + 1,
                'Aarav', 'Priya', 'Rahul', 'Ananya', 'Rohan',
                'Sneha', 'Aditya', 'Pooja', 'Aman', 'Kavya'
            ),
            ' ',
            ELT(
                (FLOOR((i - 1) / 10) MOD 10) + 1,
                'Sharma', 'Verma', 'Sahu', 'Patel', 'Gupta',
                'Yadav', 'Nishad', 'Singh', 'Jain', 'Soni'
            ),
            ' ',
            i
        );

        SET student_course = ELT(
            ((i - 1) MOD 4) + 1,
            'BCA', 'B.Sc. IT', 'MCA', 'B.Tech'
        );

        INSERT INTO students (
            student_id,
            full_name,
            email,
            course,
            total_fee
        )
        VALUES (
            i,
            student_name,
            CONCAT('student', i, '@example.com'),
            student_course,
            fee_amount
        );

        -- Student types:
        -- remainder 0: no payments
        -- remainder 1: one partial payment
        -- remainder 2: two partial payments
        -- remainder 3: three payments covering the full fee
        SET payment_count = i MOD 4;

        IF payment_count = 1 THEN
            INSERT INTO payments (
                student_id, amount, payment_date,
                payment_method, payment_reference
            )
            VALUES (
                i, 3000,
                DATE_ADD('2026-01-01', INTERVAL (i MOD 9) MONTH),
                'UPI', CONCAT('PAY-', i, '-1')
            );

        ELSEIF payment_count = 2 THEN
            SET payment_number = 1;

            WHILE payment_number <= 2 DO
                INSERT INTO payments (
                    student_id, amount, payment_date,
                    payment_method, payment_reference
                )
                VALUES (
                    i, 2500,
                    DATE_ADD(
                        '2026-01-01',
                        INTERVAL ((i + payment_number) MOD 9) MONTH
                    ),
                    'Bank Transfer',
                    CONCAT('PAY-', i, '-', payment_number)
                );

                SET payment_number = payment_number + 1;
            END WHILE;

        ELSEIF payment_count = 3 THEN
            SET payment_number = 1;
            SET payment_amount = fee_amount / 3;

            WHILE payment_number <= 3 DO
                INSERT INTO payments (
                    student_id, amount, payment_date,
                    payment_method, payment_reference
                )
                VALUES (
                    i,
                    payment_amount,
                    DATE_ADD(
                        '2026-01-01',
                        INTERVAL ((i + payment_number) MOD 9) MONTH
                    ),
                    'UPI',
                    CONCAT('PAY-', i, '-', payment_number)
                );

                SET payment_number = payment_number + 1;
            END WHILE;
        END IF;

        SET i = i + 1;
    END WHILE;
END$$

DELIMITER ;

CALL seed_student_fee_data();

DROP PROCEDURE IF EXISTS seed_student_fee_data;

-- Check the number of seeded students.
SELECT COUNT(*) AS total_students
FROM students;

-- Check how many payment records were generated.
SELECT COUNT(*) AS total_payment_records
FROM payments;

-- Assignment query 1: all students.
SELECT *
FROM students
ORDER BY student_id;

-- Assignment query 2: all payments for one student.
SELECT
    s.student_id,
    s.full_name,
    p.payment_id,
    p.amount,
    p.payment_date,
    p.payment_method,
    p.payment_reference
FROM students s
INNER JOIN payments p
    ON s.student_id = p.student_id
WHERE s.student_id = 3
ORDER BY p.payment_date;

-- Assignment query 3: total paid per student.
SELECT
    s.student_id,
    s.full_name,
    COALESCE(SUM(p.amount), 0) AS total_paid
FROM students s
LEFT JOIN payments p
    ON s.student_id = p.student_id
GROUP BY s.student_id, s.full_name
ORDER BY s.student_id;

-- Assignment query 4: include students with zero payments.
SELECT
    s.student_id,
    s.full_name,
    s.total_fee,
    COALESCE(SUM(p.amount), 0) AS total_paid,
    s.total_fee - COALESCE(SUM(p.amount), 0) AS pending_amount
FROM students s
LEFT JOIN payments p
    ON s.student_id = p.student_id
GROUP BY s.student_id, s.full_name, s.total_fee
ORDER BY s.student_id;

-- Assignment query 5: students whose total payments exceed ₹5,000.
SELECT
    s.student_id,
    s.full_name,
    SUM(p.amount) AS total_paid
FROM students s
INNER JOIN payments p
    ON s.student_id = p.student_id
GROUP BY s.student_id, s.full_name
HAVING SUM(p.amount) > 5000
ORDER BY total_paid DESC;

-- Assignment query 6: total collected in a particular month.
-- Example month: February 2026.
SELECT
    DATE_FORMAT(payment_date, '%Y-%m') AS payment_month,
    SUM(amount) AS total_collected
FROM payments
WHERE payment_date >= '2026-02-01'
  AND payment_date < '2026-03-01'
GROUP BY DATE_FORMAT(payment_date, '%Y-%m');

-- Useful report: paid, partially paid and unpaid students.
SELECT
    s.student_id,
    s.full_name,
    s.total_fee,
    COALESCE(SUM(p.amount), 0) AS total_paid,
    s.total_fee - COALESCE(SUM(p.amount), 0) AS pending_amount,
    CASE
        WHEN COALESCE(SUM(p.amount), 0) >= s.total_fee
            THEN 'Paid'
        WHEN COALESCE(SUM(p.amount), 0) > 0
            THEN 'Partial'
        ELSE 'Pending'
    END AS fee_status
FROM students s
LEFT JOIN payments p
    ON s.student_id = p.student_id
GROUP BY s.student_id, s.full_name, s.total_fee
ORDER BY s.student_id;