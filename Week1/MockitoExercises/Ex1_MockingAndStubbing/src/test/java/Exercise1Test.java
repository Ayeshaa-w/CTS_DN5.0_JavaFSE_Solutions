import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class Exercise1Test {

    @Test
    public void testMockingAndStubbing() {
        // Step 1: Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Stub - tell mock what to return
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Use mock in service
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Step 4: Verify result
        assertEquals("Mock Data", result);
    }
}