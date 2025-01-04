
import java.util.Scanner;

public class operadores {
    public static void main(String[] args) {
        Scanner entrada=new Scanner(System.in);
        float number1,number2,suma,resta,multiplicacion,division,resto;
        System.out.println("Digite 2 numbers");
        number1=entrada.nextFloat();
        number2=entrada.nextFloat();
        suma=number1+number2;
        resta=number1-number2;
        multiplicacion=number1*number2;
        division=number1/number2;
        resto=number1%number2;


        System.out.println("la suma es: "+suma);
        System.out.println("la resta es: "+resta);
        System.out.println("la multiplicacion es: "+multiplicacion);
        System.out.println("la division es: "+division);
        System.out.println("el resto es: "+resto);
    }
    
}
