public class Teste
{
    public static void main (String [] args){
        try{
        int x = 0;
        int y = 100 / x;
        System.out.println ("Resultado: " + y);
        }
        catch (ArithmeticException e){
        System.out.println ("Operação inválida!");
        System.out.println("\n Detalhes do erro: "+ e.getMessage());
        }
    }
    
}