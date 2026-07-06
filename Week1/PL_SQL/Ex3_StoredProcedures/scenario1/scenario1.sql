-- Scenario 1: Add 1% interest to all SAVINGS accounts
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    FOR rec IN (SELECT AccountID, Balance 
                FROM Accounts WHERE AccountType = 'SAVINGS')
    LOOP
        UPDATE Accounts 
        SET Balance = Balance * 1.01
        WHERE AccountID = rec.AccountID;
        
        DBMS_OUTPUT.PUT_LINE('Account ' || rec.AccountID || 
                             ' updated. New Balance: $' || 
                             ROUND(rec.Balance * 1.01, 2));
    END LOOP;
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Monthly interest processed!');
END;
/

-- Run it
EXEC ProcessMonthlyInterest;