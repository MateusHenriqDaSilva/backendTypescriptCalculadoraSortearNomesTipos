enum Operacao {
    Add = "add",
    Subtrair = "subtrair",
    Multiplicar = "multiplicar",
    Dividir = "Dividir",
    Modulo = "modulo"
}


const calculadora = function (primeiro: number, segundo: number, operacao: Operacao) {
    type calcular = (valor: number, valor2: number) => number
    const operacoes: [Operacao, calcular][] = []

    const add = function (primeiro: number, segundo: number) {
        return primeiro + segundo
    }
    operacoes.push([Operacao.Add, add])

    const subtrair = function (primeiro: number, segundo: number) {
        return primeiro - segundo
    }
    operacoes.push([Operacao.Subtrair, subtrair])

    const multiplicar = function (primeiro: number, segundo: number) {
        return primeiro * segundo
    }
    operacoes.push([Operacao.Multiplicar, multiplicar])

    const dividir = function (primeiro: number, segundo: number) {
        return primeiro / segundo
    }
    operacoes.push([Operacao.Dividir, dividir])

    const modulo = function (primeiro, segundo) {
        return primeiro % segundo
    }
    operacoes.push([Operacao.Modulo, modulo])

    const tupla = operacoes.find(tupla => tupla[0] === operacao)
    const valores = tupla[1]
    const resultado = valores(primeiro, segundo)
    console.log('tupla: ', tupla)
    console.log('valores: ', valores)
    return resultado
}

console.log(calculadora(4, 6, Operacao.Add))
console.log(calculadora(4, 6, Operacao.Subtrair))
console.log(calculadora(4, 6, Operacao.Multiplicar))
console.log(calculadora(4, 6, Operacao.Dividir))
console.log(calculadora(4, 6, Operacao.Modulo))