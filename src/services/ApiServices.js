
export class Api{

    #apiURL;

    constructor(API_KEY) {
        this.#apiURL = `https://v6.exchangerate-api.com/v6/${API_KEY}/`;
    }

    async testApi(){
        try{
            const response = await fetch(`${this.#apiURL}/latest/USD`);

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
                
            const data = await response.json();
            return data;

        }catch(err){
            console.error("Erro ao realizar a requisição:", err.message);
            process.exit(1);
        }
    }

    async initializeSupportedCodes(){  
        try{
            const response = await fetch(`${this.#apiURL}/codes`);

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
                
            const data = await response.json();
            return data.supported_codes;

        }catch(err){
            console.error("Erro ao realizar a requisição:", err.message);
            process.exit(1);
        }
        
    }
    
    async getTaxaConversao(moedaOrigem, moedaDestino, valor) {
        try{
            const response = await fetch(`${this.#apiURL}/pair/${moedaOrigem}/${moedaDestino}/${valor}`);

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
                
            const data = await response.json();
            return data;

        }catch(err){
            console.error("Erro ao realizar a requisição:", err.message);
            process.exit(1);
        }
    }
}