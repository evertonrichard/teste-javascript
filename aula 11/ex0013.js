var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} horas!`)
if (hora > 12){
    console.log('Bom Dia!')
} else if (hora > 18){
    console.log ('boa tarde!')
} else if (hora > 19 || hora < 23){
    console.log('boa madrugad!')
}