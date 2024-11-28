/**
 * Verifica se o valor contém um ou mais dígitos numéricos.
 * 
 * Exemplo:
 * - "123" => corresponde (verdadeiro)
 * - "abc" => não corresponde (falso)
 * - "12abc" => corresponde (verdadeiro)
 */
export const regexNum = /\d+/;

/**
 * Verifica se o valor contém caracteres especiais (não alfanuméricos nem espaços).
 * 
 * Exemplo:
 * - "abc@123" => corresponde (verdadeiro)
 * - "abc123" => não corresponde (falso)
 * - "abc 123" => não corresponde (falso)
 */
export const regexSim = /[^\w\s]/;

/**
 * Verifica se o valor contém uma ou mais letras (maiúsculas ou minúsculas).
 * 
 * Exemplo:
 * - "abc" => corresponde (verdadeiro)
 * - "123" => não corresponde (falso)
 * - "abc123" => corresponde (verdadeiro)
 */
export const regexLetras = /[a-zA-Z]/;