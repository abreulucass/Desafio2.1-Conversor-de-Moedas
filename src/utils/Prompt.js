import PromptSync from "prompt-sync";
const prompt = PromptSync()

export class Prompt{
    static getMoedaOrigem(){
        return prompt("Moeda origem: ").toUpperCase();
    }

    static getMoedaDestino(){
        return prompt("Moeda destino: ").toUpperCase();
    }

    static getValor(){
        return prompt("Valor: ");
    }
}