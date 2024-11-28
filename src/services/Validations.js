import { regexNum, regexSim, regexLetras } from '../utils/regex.js';

export class Validations{

    #supportedCodes

      /**
     * Método para definir os códigos das moedas suportadas.
     * 
     * @param {Array} supportedCodes - Um array de códigos de moedas suportadas (ex: ['USD', 'BRL']).
     */
    set supportedCodes(supportedCodes){ this.#supportedCodes = supportedCodes; }

     /**
     * Valida o código da moeda fornecida.
     * 
     * Verifica se o código da moeda:
     * - Contém apenas letras (sem números ou caracteres especiais).
     * - Tem exatamente 3 caracteres.
     * - Está presente na lista de moedas suportadas.
     * 
     * @param {string} code - O código da moeda a ser validado (ex: 'USD', 'BRL').
     * @returns {boolean} - Retorna `true` se a moeda for válida, caso contrário, retorna `false`.
     */
    verifCodeMoeda(code){

        if(regexNum.test(code) || regexSim.test(code)){
            console.log("ERRO: Moeda invalida");
            return false;
        }
    
        if(code.length != 3){
            console.log("ERRO: A moeda deve ter exatamente 3 caracteres");
            return false;
        }
    
        if(!this.#supportedCodes.some(cod => cod[0] === code)){
            console.log("ERRO: O codigo da moeda é invalido ou nao é suportado")
            return false;
        }
    
        return true;
        
    }

     /**
     * Valida o valor fornecido para conversão.
     * 
     * Verifica se o valor:
     * - Não contém caracteres especiais ou letras.
     * - É um número positivo (não negativo).
     * 
     * @param {number} valor - O valor a ser validado.
     * @returns {boolean} - Retorna `true` se o valor for válido, caso contrário, retorna `false`.
     */
    verifValor(valor){
        if(regexSim.test(valor) || regexLetras.test(valor)){
            console.log("ERRO: Valor invalido")
            return false;
        }

        if(valor < 0){
            console.log("ERRO: Valor menor que 0")
            return false;
        }

        return true;
    }

     /**
     * Valida a resposta da API.
     * 
     * Verifica se a resposta da API contém um erro.
     * 
     * @param {object} resp - A resposta da API.
     * @returns {boolean} - Retorna `false` se a resposta indicar erro, caso contrário, retorna `true`.
     */
    validateResp(resp){
        if(resp.result === 'error'){
            console.log(`ERRO: ${resp["error-type"]}`);
            return false;
        }

        return true
    }
}