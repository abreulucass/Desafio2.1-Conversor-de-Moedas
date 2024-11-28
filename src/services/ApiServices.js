export class Api{

    #apiURL;

    /**
     * Construtor da classe Api.
     * Inicializa a URL base da API com o API_KEY fornecido.
     * 
     * @param {string} API_KEY - A chave de API fornecida pela ExchangeRate-API
     */
    constructor(API_KEY) {
        this.#apiURL = `https://v6.exchangerate-api.com/v6/${API_KEY}/`;
    }

    /**
     * Método que testa a conexão com a API, fazendo uma requisição para obter a taxa de câmbio para USD.
     * 
     * @returns {Promise<object>} - Retorna os dados da resposta em formato JSON se a requisição for bem-sucedida.
     * @throws {Error} - Caso ocorra um erro na requisição, uma mensagem de erro será exibida e o processo será encerrado.
     */
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

    /**
     * Método que retorna a lista de códigos de moedas suportadas pela API.
     * 
     * @returns {Promise<Array>} - Retorna um array com os códigos das moedas suportadas pela API.
     * @throws {Error} - Caso ocorra um erro na requisição, uma mensagem de erro será exibida e o processo será encerrado.
     */
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
    
    /**
     * Método que obtém a taxa de conversão entre duas moedas, dado um valor a ser convertido.
     * 
     * @param {string} moedaOrigem - O código da moeda de origem (ex: 'USD', 'BRL').
     * @param {string} moedaDestino - O código da moeda de destino (ex: 'EUR', 'BRL').
     * @param {number} valor - O valor que você deseja converter da moeda de origem para a moeda de destino.
     * 
     * @returns {Promise<object>} - Retorna os dados da resposta em formato JSON, incluindo a taxa de conversão e o valor convertido.
     * @throws {Error} - Caso ocorra um erro na requisição, uma mensagem de erro será exibida e o processo será encerrado.
     */
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