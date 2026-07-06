-- Scenario 3: Transfer money between accounts
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from   IN NUMBER,
    p_to     IN NUMBER,
    p_amount IN NUMBER
) AS
    v_balance NUMBER;
BEGIN
    -- Check source balance
    SELECT Balance INTO v_balance 
    FROM Accounts WHERE AccountID = p_from;
    
    IF v_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE('ERROR: Not enough balance! Available: $' || v_balance);
    ELSE
        -- Deduct from source
        UPDATE Accounts SET Balance = Balance - p_amount 
        WHERE AccountID = p_from;
        
        -- Add to destination
        UPDATE Accounts SET Balance = Balance + p_amount 
        WHERE AccountID = p_to;
        
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer SUCCESS: $' || p_amount || 
                             ' from Account ' || p_from || 
                             ' to Account ' || p_to);
    END IF;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('ERROR: Account not found!');
END;
/

-- Run it: Transfer $2000 from account 1 to account 2
EXEC TransferFunds(1, 2, 2000);