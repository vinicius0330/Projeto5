// Declarando as variáveis

const hamburguer =document.querySelector(".hamburguer");
const headerMenu =document.querySelector(".header-menu");

// Criando a função TOOGLE

function toggleMenu(){
    hamburguer.classList.toggle("active");
    headerMenu.classList.toggle("active");
}

// Criando o evento

hamburguer.addEventListener('click',toggleMenu);
headerMenu.addEventListener('click',(e)=>{
    if(e.target.classList.contains('item-menu')){
        toggleMenu();
    }
})