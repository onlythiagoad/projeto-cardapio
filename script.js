const liNavegacao = document.querySelectorAll('.li-navegacao')
const tabItens =  document.querySelectorAll('.tabItens')
const iconMenu = document.querySelector('.menu-icon')
const navegacao = document.querySelector('.navegacao')
const ulNavegacao = document.querySelector('.ul-navegacao')


function show(index){
    tabItens.forEach((elemento)=>{
        elemento.classList.remove('ativo')
    })
    tabItens[index].classList.add('ativo')
}

liNavegacao.forEach((elemento,indice)=>{
    elemento.addEventListener('click',()=>{
        show(indice)
    })
})

iconMenu.addEventListener('click',()=>{
    ulNavegacao.classList.toggle('navegacao-ativo')
    navegacao.classList.toggle('navegacao-altura')
})