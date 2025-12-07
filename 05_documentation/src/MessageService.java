
/**
 * MessageService - példakód dokumentációgeneráláshoz.
 */
public class MessageService {
    /**
     * Üzenet küldése.
     * @param msg A küldendő üzenet
     * @return sikeres-e
     */
    public boolean send(String msg){
        return msg != null && !msg.isEmpty();
    }
}
