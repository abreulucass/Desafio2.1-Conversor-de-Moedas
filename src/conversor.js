import { Api } from "./services/ApiServices.js";
import { TelaConversor } from "./views/TelaConversor.js";
import { Validations } from "./services/Validations.js";
import dotenv from 'dotenv';

dotenv.config();

const api = new Api(process.env.API_KEY);
const validations = new Validations()

await api.testApi()

validations.supportedCodes = await api.initializeSupportedCodes()

TelaConversor.initTitulo()

while(1){
    const form = TelaConversor.initTela(validations)

    if(form == -500){
        process.exit(0)
    }

    const resp = await api.getTaxaConversao(...form)

    if(!resp){
        continue;
    }

    TelaConversor.resultadoTela(...form, resp.conversion_rate.toFixed(6), resp.conversion_result.toFixed(2));
}

