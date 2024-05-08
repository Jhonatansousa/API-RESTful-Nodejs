export function extractQueryParams(query) {
    return query.substr(1).split('&').reduce((queryParams, param) => {
        const [key, value] = param.split('=')

        queryParams[key] = value
        return queryParams
    }, {})
}
/**Propriedade para acessar parâmetros de identificação de um recurso passados na URL de uma rota
 * exemplo: vai pegar o parametro da url http://localhost:3333/users?search=jhonatan
 * ele vai pegar exatamente (?search=jhonatan)
 * posso ter vários por exemplos: s?search=jhonatan&page=2
 * substr exclui o caracter '?'
 * separo com o .split() a string,  usando desestruturação uma se torna key e outra value
 */