import org.junit.*;
import static org.junit.Assert.*;

public class AAAPatternTest {

    Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator();
    }

    @After
    public void tearDown() {
        calc = null;
    }

    @Test
    public void testAdd() {
        // Arrange
        int a = 10, b = 5;
        // Act
        int result = calc.add(a, b);
        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testSubtract() {
        // Arrange
        int a = 10, b = 5;
        // Act
        int result = calc.subtract(a, b);
        // Assert
        assertEquals(5, result);
    }
}