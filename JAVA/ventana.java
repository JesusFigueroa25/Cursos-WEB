
import javax.swing.JOptionPane;

public class ventana {
    public static void main(String[] args) {
        String cadena;
        Integer number;
        double decimal;
        
        cadena=JOptionPane.showInputDialog("cadena");
        number=Integer.parseInt((JOptionPane.showInputDialog("numero")));
        decimal=Double.parseDouble((JOptionPane.showInputDialog("double")));

        JOptionPane.showMessageDialog(null, "la cadena es"+cadena);
        JOptionPane.showMessageDialog(null, "number es"+number);
        JOptionPane.showMessageDialog(null, "double es"+decimal);

        System.out.println("cadena: "+cadena);
        System.out.println("number: "+number);
        System.out.println("decimal: "+decimal);


    }
    
}
