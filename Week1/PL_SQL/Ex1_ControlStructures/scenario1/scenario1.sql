-- Scenario 1: Apply 1% discount to customers above 60
SET SERVEROUTPUT ON;

BEGIN
    FOR rec IN (SELECT CustomerID, Name, Age, InterestRate 
                FROM Customers WHERE Age > 60)
    LOOP
        UPDATE Customers 
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = rec.CustomerID;
        
        DBMS_OUTPUT.PUT_LINE('Discount applied: ' || rec.Name || 
                             ' Age:' || rec.Age ||
                             ' New Rate:' || (rec.InterestRate - 1) || '%');
    END LOOP;
    COMMIT;
END;
/
-- Updated path