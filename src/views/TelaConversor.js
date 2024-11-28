
import { Prompt } from "../utils/prompt.js"

export class TelaConversor{

     /**
     * Exibe o título do conversor de moedas.
     * 
     * Função estática que imprime a mensagem "CONVERSOR DE MOEDAS" no console.
     */
    static initTitulo(){
        console.log("CONVERSOR DE MOEDAS")
    }

    /**
     * Inicia o processo de coleta de dados do usuário (moeda de origem, moeda de destino e valor),
     * realizando as devidas validações.
     * 
     * @param {Validation} Validation - Instância da classe Validation responsável por validar as entradas.
     * 
     * @returns {Array|number} - Retorna um array contendo os dados (moeda de origem, moeda de destino e valor),
     *                            ou -500 se o usuário quiser parar a execução do codigo.
     */
    static initTela(Validation){
        
        const form = []

        while(1){
            const codeOrigem = Prompt.getMoedaOrigem()

            if(codeOrigem == ''){
                return -500;
            }

            if(!Validation.verifCodeMoeda(codeOrigem)){
                continue;
            } else {
                form.push(codeOrigem)
                break;
            }
        }

        while(1){
            const codeDestino = Prompt.getMoedaDestino()

            if(!Validation.verifCodeMoeda(codeDestino)){
                continue;
            } else {
                form.push(codeDestino)
                break;
            }
        }

        while(1){
            const valor = Prompt.getValor()

            if(!Validation.verifValor(valor)){
                continue;
            } else {
                form.push(parseFloat(valor))
                break;
            }
        }

        return form;
    }

    /**
     * Exibe o resultado da conversão de moedas no console.
     * 
     * @param {string} codeOrigem - Código da moeda de origem.
     * @param {string} codeDestino - Código da moeda de destino.
     * @param {number} valor - Valor original da moeda de origem.
     * @param {number} taxa - Taxa de conversão entre as duas moedas.
     * @param {number} valorConversao - Valor convertido para a moeda de destino.
     */
    static resultadoTela(codeOrigem, codeDestino, valor, taxa, valorConversao){
        console.log(`\n${codeOrigem} ${valor.toFixed(2)} => ${codeDestino} ${valorConversao}`);
        console.log(`Taxa: ${taxa}\n`)
    }
}