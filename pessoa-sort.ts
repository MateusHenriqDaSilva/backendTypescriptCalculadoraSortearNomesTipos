interface Pessoa {
    primeiroNome: string
    ultimoNome: string
}

let contador = + 0

function pegarNomeCompleto(pessoa: Pessoa) {
    contador = + 1
    return `${pessoa.primeiroNome} ${pessoa.ultimoNome}`
}

let pessoas: Pessoa[] = [
    { primeiroNome: 'mateus', ultimoNome: 'henrique' },
    { primeiroNome: 'denner', ultimoNome: 'miranda' },
    { primeiroNome: 'pedro', ultimoNome: 'henrique' },
    { primeiroNome: 'luana', ultimoNome: 'graton' },
    { primeiroNome: 'sandra', ultimoNome: 'oliveira' }
]

function pessoasIngenuas(pessoa: Pessoa[]): Pessoa[] {
    return pessoa.slice().sort((primeiro, segundo) => {
        const primeiroNomeCompleto = pegarNomeCompleto(primeiro)
        const segundoNomeCompleto = pegarNomeCompleto(segundo)
        return primeiroNomeCompleto.localeCompare(segundoNomeCompleto)
    })
}

function serializarPessoas(pessoas: Pessoa[]): Pessoa[] {
    const tuplas: [Pessoa, string][] = pessoas.map(pessoa => [pessoa, pegarNomeCompleto(pessoa)])
    tuplas.sort((primeiro, segundo) => (
        primeiro[1].localeCompare(segundo[1])
    ))
    const resultado = tuplas.map(tupla => tupla[0])
    return resultado
}

const sortearPessoa = pessoasIngenuas(pessoas)
console.log(sortearPessoa, contador)