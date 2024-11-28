import { regexNum, regexSim, regexLetras } from '../utils/regex.js';

export class Validations{

    #supportedCodes

    /**
     * @param {Array} supportedCodes
     */

    set supportedCodes(supportedCodes){ this.#supportedCodes = supportedCodes; }

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

    validateResp(resp){
        if(resp.result === 'error'){
            console.log(`ERRO: ${resp["error-type"]}`);
            return false;
        }
    }
}