public class Teste
{
    public static void main (String [] args){
        Scanner sc = new Scanner(System.in);
        try{
        int x = sc.nextInt();
        int y = 100 / x;
        System.out.println ("Resultado: " + y);
        }
        catch (InputMismatchException e){
        System.out.println (“Formato inválido!");
        System.out.println("\n Detalhes do erro:“+ e.getMessage());
        }
        catch (ArithmeticException e){
        System.out.println (“Operação inválida!");
        System.out.println("\n Detalhes do erro:“+ e.getMessage());
        }
    }
}