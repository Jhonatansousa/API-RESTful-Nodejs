// criamos o regex, ele vai pegar esse url e salvar o parâmetro que foi passado no url, no caso desse código
// usamos o id nesse caso, criamos uma função que vai pegar o url e analizar o que for uma regex(http://localhost/users->(:variavel)<-)
export function buildRoutePath(path) {

// criamos uma variável que é tudo que for de a~z e A~Z que tenha 1 caracter ou mais
    const routeParametersRegex = /:([a-zA-Z]+)/g
    // e nós trocamos esse parametro pelo regex que tem todas os caracteres do Unique Universal ID (UUID)
    const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')
//  ?<$1> => ele vai nomear as variáveis da url, qualquer uma que eu escreva no arquivo routes, automaticamente 

    const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

    return pathRegex
}