-- Scenario 3: Print reminders for loans due within 30 days
SET SERVEROUTPUT ON;

BEGIN
    FOR rec IN (SELECT c.Name, l.LoanID, l.Amount, l.DueDate,
                       TRUNC(l.DueDate - SYSDATE) AS DaysLeft
                FROM Loans l 
                JOIN Customers c ON l.CustomerID = c.CustomerID
                WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30)
    LOOP
        DBMS_OUTPUT.PUT_LINE('REMINDER: ' || rec.Name || 
                             ' | Loan: $' || rec.Amount ||
                             ' | Due in: ' || rec.DaysLeft || ' days');
    END LOOP;
END;
/