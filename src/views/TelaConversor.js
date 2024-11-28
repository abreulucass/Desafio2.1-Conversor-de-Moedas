
import { Prompt } from "../utils/prompt.js"

export class TelaConversor{

    static initTitulo(){
        console.log("CONVERSOR DE MOEDAS")
    }

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

    static resultadoTela(codeOrigem, codeDestino, valor, taxa, valorConversao){
        console.log(`\n${codeOrigem} ${valor.toFixed(2)} => ${codeDestino} ${valorConversao}`);
        console.log(`Taxa: ${taxa}\n`)
    }
}