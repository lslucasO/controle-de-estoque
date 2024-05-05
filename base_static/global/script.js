function alertaUsuario(){
    return alert("Eae tu clicou aqui boy");
}

function appear(){
    let menu_item = document.querySelector('.menu-item')
    menu_item.style.width = '15%'
}

function disappear(){
    let menu_item = document.querySelector('.menu-item')
    menu_item.style.width = '0%'
}