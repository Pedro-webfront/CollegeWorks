/*Crie um programa em Java que receba 2 valores e efetua a divisão do primeiro pelo segundo.
 Trate, via exceção, o caso de formato de número inválido e divisão por zero. Mostre as mensagens na saída. */

import java.util.Scanner;

public class Exerceptions {

    public static void main(String[] args) {
        try (Scanner ler = new Scanner(System.in)) {

            System.out.print("Digite o numerador: ");
            int numerador = Integer.parseInt(ler.nextLine());

            System.out.print("Digite o divisor: ");
            int divisor = Integer.parseInt(ler.nextLine());

            int resultado = numerador / divisor;

            System.out.println("\nO resultado da divisão é: " + resultado);

        } catch (NumberFormatException | ArithmeticException e) {
            System.err.println("Erro de entrada ou operação matemática inválida.");
            System.err.println("Detalhes: " + e.getMessage()); 
        } 
    }
}