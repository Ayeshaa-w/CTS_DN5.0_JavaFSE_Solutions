-- Scenario 2: Add bonus % to employees in a department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus      IN NUMBER
) AS
BEGIN
    FOR rec IN (SELECT EmployeeID, Name, Salary 
                FROM Employees WHERE Department = p_department)
    LOOP
        UPDATE Employees 
        SET Salary = Salary + (Salary * p_bonus / 100)
        WHERE EmployeeID = rec.EmployeeID;
        
        DBMS_OUTPUT.PUT_LINE(rec.Name || 
                             ' | Old: $' || rec.Salary ||
                             ' | New: $' || ROUND(rec.Salary * (1 + p_bonus/100), 2));
    END LOOP;
    COMMIT;
END;
/

-- Run it: Give IT 10% bonus
EXEC UpdateEmployeeBonus('IT', 10);