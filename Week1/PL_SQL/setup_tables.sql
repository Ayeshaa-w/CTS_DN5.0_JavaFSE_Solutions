SET SERVEROUTPUT ON;

CREATE TABLE Customers (
    CustomerID   NUMBER PRIMARY KEY,
    Name         VARCHAR2(100),
    Age          NUMBER,
    Balance      NUMBER(10,2),
    IsVIP        VARCHAR2(5) DEFAULT 'FALSE',
    InterestRate NUMBER(5,2)
);

CREATE TABLE Loans (
    LoanID      NUMBER PRIMARY KEY,
    CustomerID  NUMBER,
    Amount      NUMBER(10,2),
    DueDate     DATE
);

CREATE TABLE Accounts (
    AccountID   NUMBER PRIMARY KEY,
    CustomerID  NUMBER,
    AccountType VARCHAR2(20),
    Balance     NUMBER(10,2)
);

CREATE TABLE Employees (
    EmployeeID  NUMBER PRIMARY KEY,
    Name        VARCHAR2(100),
    Department  VARCHAR2(50),
    Salary      NUMBER(10,2)
);

-- Sample Data
INSERT INTO Customers VALUES (1, 'Ravi',   65, 15000, 'FALSE', 8.5);
INSERT INTO Customers VALUES (2, 'Priya',  45, 8000,  'FALSE', 9.0);
INSERT INTO Customers VALUES (3, 'Mohan',  70, 12000, 'FALSE', 7.5);
INSERT INTO Customers VALUES (4, 'Sunita', 35, 5000,  'FALSE', 10.0);
INSERT INTO Customers VALUES (5, 'Arjun',  62, 20000, 'FALSE', 8.0);

INSERT INTO Loans VALUES (1, 1, 50000, SYSDATE + 10);
INSERT INTO Loans VALUES (2, 2, 30000, SYSDATE + 45);
INSERT INTO Loans VALUES (3, 3, 80000, SYSDATE + 5);
INSERT INTO Loans VALUES (4, 4, 20000, SYSDATE + 25);
INSERT INTO Loans VALUES (5, 5, 60000, SYSDATE + 15);

INSERT INTO Accounts VALUES (1, 1, 'SAVINGS', 10000);
INSERT INTO Accounts VALUES (2, 2, 'SAVINGS', 5000);
INSERT INTO Accounts VALUES (3, 3, 'SAVINGS', 20000);
INSERT INTO Accounts VALUES (4, 4, 'CURRENT', 8000);
INSERT INTO Accounts VALUES (5, 5, 'SAVINGS', 15000);

INSERT INTO Employees VALUES (1, 'Amit',  'IT', 60000);
INSERT INTO Employees VALUES (2, 'Neha',  'IT', 55000);
INSERT INTO Employees VALUES (3, 'Raj',   'HR', 45000);
INSERT INTO Employees VALUES (4, 'Kavya', 'FINANCE', 70000);
INSERT INTO Employees VALUES (5, 'Suresh','IT', 65000);

COMMIT;