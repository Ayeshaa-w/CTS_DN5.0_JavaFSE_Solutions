public class MyService {

    private ExternalApi api;

    // Constructor - inject the API
    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}