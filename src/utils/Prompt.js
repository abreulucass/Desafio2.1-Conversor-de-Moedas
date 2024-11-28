import PromptSync from "prompt-sync";
const prompt = PromptSync()

export class Prompt{

    /**
     * Solicita ao usuário o código da moeda de origem e retorna a entrada em letras maiúsculas.
     * 
     * @returns {string} - O código da moeda de origem fornecido pelo usuário (ex: 'USD', 'BRL').
     */
    static getMoedaOrigem(){
        return prompt("Moeda origem: ").toUpperCase();
    }

     /**
     * Solicita ao usuário o código da moeda de destino e retorna a entrada em letras maiúsculas.
     * 
     * @returns {string} - O código da moeda de destino fornecido pelo usuário (ex: 'USD', 'BRL').
     */
    static getMoedaDestino(){
        return prompt("Moeda destino: ").toUpperCase();
    }

    /**
     * Solicita ao usuário o valor a ser convertido e retorna a entrada como string.
     * 
     * @returns {string} - O valor fornecido pelo usuário (ex: '100', '150.50').
     */
    static getValor(){
        return prompt("Valor: ");
    }
}