
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {
    @Test
    public void testAdd(){
        Calculator c = new Calculator();
        assertEquals(5, c.add(2,3));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideException(){
        Calculator c = new Calculator();
        c.divide(10,0);
    }
}
