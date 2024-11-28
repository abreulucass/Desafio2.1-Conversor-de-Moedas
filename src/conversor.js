import { Api } from "./services/ApiServices.js";
import { TelaConversor } from "./views/TelaConversor.js";
import { Validations } from "./services/Validations.js";
import dotenv from 'dotenv';

// Carrega as variaveis de ambiente do arquivo .env
dotenv.config();

// Instancia a classe Api, passando a chave de API obtida das variaveis de ambiente
const api = new Api(process.env.API_KEY);

// Instancia a classe de validacoes
const validations = new Validations()

// Teste para saber se a API está funcionando corretamente
await api.testApi()

// Obter e armazena os codigos de moedas suportados pela API
validations.supportedCodes = await api.initializeSupportedCodes()

// Inicio da execuçao do programa
TelaConversor.initTitulo()

while(1){
    const form = TelaConversor.initTela(validations)
    
    if(form == -500){
        process.exit(0)
    }

    const resp = await api.getTaxaConversao(...form)

    if(!validations.validateResp(resp)){
        continue;
    }

    TelaConversor.resultadoTela(...form, resp.conversion_rate.toFixed(6), resp.conversion_result.toFixed(2));
}

