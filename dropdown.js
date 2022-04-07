const drop = document.getElementById('navbarDropdown')
console.log(drop)

const subMenu = document.querySelector('.dropdown-menu')

drop.addEventListener('click', toggle)
function toggle(e){
    subMenu.classList.toggle('toggle__menu')
    
}
