/* nome  */

let nome = document.querySelector('#nome')
let erroNome = document.querySelector('#erroNome')

/* assunto */

let assunto = document.querySelector('#assunto')
let erroAssunto = document.querySelector('#erroAssunto')

/* email */

let email = document.querySelector('#email')
let erroEmail = document.querySelector('#erroEmail')

/* variaveis auxiliares de validacao */

let nomeOK = false
let emailOK = false
let assuntoOK = false

//mapa

let mapa = document.querySelector('#mapa')

function validaNome(){
    if(nome.value.length < 3) {
        erroNome.innerHTML = 'Nome Invállido'
    }else{
        erroNome.innerHTML = ''
        nomeOK = true
    }
    
}

function validaEmail(){
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        erroEmail.innerHTML = 'Email Inválido'
    }else{
        erroEmail.innerHTML = ''
        emailOK = true
    }
    
}

function validaAssunto(){
    if(assunto.value.length > 100){
        erroAssunto.innerHTML = 'limite de 100 caracteres excedido'
    }else{
        erroAssunto.innerHTML = ''
        assuntoOk = true
    }
    
}

function enviar(){
    if(nomeOK && emailOK && assuntoOK) {
        alert(' Email enviado com sucesso')
    }else{
        alert('Preencha as informações corretamente')
    }
}

function mapaZoom(){
 mapa.style.width = '600px'
 mapa.style.height = '400px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
