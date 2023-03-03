/*===== MENU SHOW =====*/ 
/* Esta linha é um comentário que indica que a seguir começa a função que mostra o menu.*/

const showMenu = (toggleId, navId) =>{
    
    /*Esta linha declara uma constante chamada "showMenu" e define uma função que recebe dois argumentos: "toggleId" e "navId". Essa função será usada para exibir o menu.*/
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    /*Essas linhas buscam os elementos HTML com os IDs correspondentes aos argumentos "toggleId" e "navId" na função anterior.*/
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

/*Esta é uma estrutura condicional que verifica se ambos os elementos HTML foram encontrados. Se encontrados, a função adiciona um evento de clique ao elemento "toggle" para alternar a classe "show" do elemento "nav", exibindo ou ocultando o menu.*/
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
/*Esta linha é um comentário que indica que a seguir começa a função que remove o menu móvel. */
const navLink = document.querySelectorAll('.nav__link')

/*Esta linha declara uma constante chamada "navLink" e usa o método "querySelectorAll()" para selecionar todos os elementos HTML que possuem a classe "nav__link". Esses elementos são links do menu. */
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}

/*Essas linhas definem uma função chamada "linkAction" que é executada quando um link do menu é clicado. A função obtém o elemento HTML com o ID "nav-menu" e
remove a classe "show" desse elemento.*/
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
/* Esta linha é um comentário que indica que a seguir começa a função que adiciona links ativos à medida que a página é rolada. */
const sections = document.querySelectorAll('section[id]')

/* Esta linha declara uma constante chamada "sections" e usa o método "querySelectorAll()" para selecionar todos os elementos HTML do tipo "section" que 
possuem um atributo "id". Esses elementos são as seções da página. */
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/* Essas linhas definem uma função chamada "scrollActive" que é executada quando a página é rolada. A função obtém a posição de rolagem vertical da página e
itera sobre cada elemento da lista "sections". Para cada elemento, a função obtém a altura e a posição superior do elemento, bem como seu atributo "id".
Se a posição de rolagem vertical está dentro da seção, a função adiciona a classe "active" ao link do menu correspondente. */
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
/* Essa parte do código está configurando e executando uma biblioteca chamada "ScrollReveal", que é usada para animar elementos quando eles entram na visão 
do usuário durante o scroll da página.

O objeto "sr" é criado usando o construtor "ScrollReveal()", que recebe um objeto com as opções de configuração. Aqui, as opções especificam que a animação começa a partir do topo da janela,
movendo os elementos para baixo em 60px, com duração de 2 segundos e um atraso de 200 milissegundos.*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

/* Em seguida, os métodos "reveal()" são chamados no objeto "sr" para especificar os elementos que devem ser animados e com quais opções adicionais.
Por exemplo, ".home__data, .about__img, .skills__subtitle, .skills__text" serão animados sem nenhuma opção adicional, enquanto ".home__img, .about__subtitle, 
.about__text, .skills__img" serão animados com um atraso de 400 milissegundos.*/

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
