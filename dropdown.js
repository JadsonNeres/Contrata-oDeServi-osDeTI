const menu = document.getElementById('navbarDropdownMenu')
const login = document.getElementById('navbarDropdownCadastro')

const subMenu = document.querySelector('.dropdown-menu')
const subCadastro = document.querySelector('.Cadastro')

menu.addEventListener('click', toggle)
login.addEventListener('click', toggle2)

function toggle(e){
    subMenu.classList.toggle('toggle__menu')
}
function toggle2(e){
    subCadastro.classList.toggle('toggle__cadastro')
}
