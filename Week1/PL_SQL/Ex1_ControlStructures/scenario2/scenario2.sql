-- Scenario 2: Set IsVIP = TRUE for balance over 10000
SET SERVEROUTPUT ON;

BEGIN
    FOR rec IN (SELECT CustomerID, Name, Balance FROM Customers)
    LOOP
        IF rec.Balance > 10000 THEN
            UPDATE Customers 
            SET IsVIP = 'TRUE'
            WHERE CustomerID = rec.CustomerID;
            
            DBMS_OUTPUT.PUT_LINE(rec.Name || ' -> VIP! Balance: $' || rec.Balance);
        ELSE
            DBMS_OUTPUT.PUT_LINE(rec.Name || ' -> Regular. Balance: $' || rec.Balance);
        END IF;
    END LOOP;
    COMMIT;
END;
/