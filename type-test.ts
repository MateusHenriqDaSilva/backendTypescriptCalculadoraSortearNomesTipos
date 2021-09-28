const diasNaSemana = 7
const nome = 'Mateus Henrique'
const estaChovendo = false
const hoje = new Date()
const mes = ['janeiro', 'fevereiro', 'marco']
const naoDefinido = undefined
const nada = null
const add3 = (x: number, y: number) => x + y
const calcular = {
    add3
}
const tudo = [
    diasNaSemana, nome, estaChovendo, hoje, mes, naoDefinido, nada, add3, calcular
]

for (const valores of tudo) {
    console.log(typeof valores)
}

// chamando valores html dentro de uma string
const primeiroNome = 'mateus'
const ultimoNome = 'henrique'
const html = "<div class=\"saudacao\">\nOla, " + primeiroNome + " " + ultimoNome + "\n<div>"
const html2 = `<div class="saudacao"> Ola, ${primeiroNome} ${ultimoNome} </div>`

