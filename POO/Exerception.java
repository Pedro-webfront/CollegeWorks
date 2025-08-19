//Receba uma String via Scanner e mostre o valor todo em letras maiúsculas.
// Trate a exceção para o caso de nenhum valor ter sido digitado para a String. Trate a exceção NullPointerException.
import java.util.Scanner;
public class Exerception
{
    public static void main(String [] args)  throws NullPointerException{
        try{
        Scanner ler = null;
        String test = ler.nextLine();

         System.out.println("Não vai dar");
        }
        catch (NullPointerException e){
        System.out.println ("Operação inválida!");
        System.out.println("\n Detalhes do erro: "+ e.getMessage());
        }
    }
}