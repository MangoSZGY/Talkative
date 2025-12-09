
import org.junit.Test;
import static org.junit.Assert.*;

public class IntegrationTest {
    @Test
    public void testUserRegistrationFlow(){
        UserRepository repo = new UserRepository();

        assertTrue(repo.register("mark"));
        assertTrue(repo.exists("mark"));

        assertFalse(repo.register("mark"));
    }
}
