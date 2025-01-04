public class OperadorMath {
    public static void main(String[] args) {
        //Raiz cuadrada
        double x=Math.sqrt(9); //Sqrt es para doubles
        int y=(int)Math.sqrt(9);
        System.out.println(x+" & "+y);
        //Potencia
        double base =5, exponente=2;
        double resultado=Math.pow(base,exponente);
        System.out.println(resultado);
        //Redondear
        double numero=4.56;
        long redondeado=Math.round(numero);
        System.out.println(redondeado);
        //Random
        double random=Math.random();
        System.out.println(random);

    }
}
