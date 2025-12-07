
import java.util.*;

public class UserRepository {
    private Set<String> users = new HashSet<>();

    public boolean register(String username){
        if(users.contains(username)) return false;
        users.add(username);
        return true;
    }

    public boolean exists(String username){
        return users.contains(username);
    }
}
