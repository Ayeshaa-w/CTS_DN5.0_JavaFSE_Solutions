import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.*;

public class Exercise2Test {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Use service
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Step 3: Verify getData() was called
        verify(mockApi).getData();
    }
}