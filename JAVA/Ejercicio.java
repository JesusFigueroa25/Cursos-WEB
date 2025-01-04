//Hacer un programa que calcule la suma de 3 notas

import java.util.Scanner;
import javax.swing.JOptionPane;

public class Ejercicio {

    public static void main(String[] args) {
        double nota1, nota2, nota3, resultado;
        Scanner entrada = new Scanner(System.in);

        // nota1=Double.parseDouble((JOptionPane.showInputDialog("Escriba su nota 1")));
        // nota2=Double.parseDouble((JOptionPane.showInputDialog("Escriba su nota 2")));
        // nota3=Double.parseDouble((JOptionPane.showInputDialog("Escriba su nota 3")));
        
        //Otra forma
        nota1 = entrada.nextDouble();
        nota2 = entrada.nextDouble();
        nota3 = entrada.nextDouble();

        //Suma
        resultado = nota1 + nota2 + nota3;
        System.out.println("La suma es: " + resultado);
        JOptionPane.showMessageDialog(null, "La suma de las notas es: " + resultado);

        //Promedio
        resultado = resultado / 3;
        JOptionPane.showMessageDialog(null, "El promedio de las notas es: " + resultado);
    }

}
