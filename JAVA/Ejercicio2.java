// Programa que calcule el salario semanal de un empleado a
// partir de sus horas semanales trabajadas y de su salario por hora
import java.util.Scanner;
import javax.swing.JOptionPane;

public class Ejercicio2 {
    public static void main(String[] args) {
        double salario,total,lunesS, martesS, miercolesS, juevesS, viernesS, SabadoS;

        salario=Double.parseDouble((JOptionPane.showInputDialog("Escriba su salario por hora:")));
        lunesS=Double.parseDouble((JOptionPane.showInputDialog("Escriba las horas trabajadas de lunes :")));
        martesS=Double.parseDouble((JOptionPane.showInputDialog("Escriba las horas trabajadas de martes :")));
        miercolesS=Double.parseDouble((JOptionPane.showInputDialog("Escriba las horas trabajadas de miercoles :")));
        juevesS=Double.parseDouble((JOptionPane.showInputDialog("Escriba las horas trabajadas de jueves :")));
        viernesS=Double.parseDouble((JOptionPane.showInputDialog("Escriba las horas trabajadas de viernes :")));
        SabadoS=Double.parseDouble((JOptionPane.showInputDialog("Escriba las horas trabajadas de Sabado :")));

        //Suma
        total=(lunesS*salario)+(martesS*salario)+(miercolesS*salario)+(juevesS*salario)+(viernesS*salario)+(SabadoS*salario);
        JOptionPane.showMessageDialog(null, "El salario semanal: " + total);
    }
}
