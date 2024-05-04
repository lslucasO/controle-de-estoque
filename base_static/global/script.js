function alertaUsuario(){
    return alert("Eae tu clicou aqui boy");
}

function appear(){
    let menu_item = document.querySelector('.menu-item')
    menu_item.style.width = '20%'
}

function disappear(){
    let menu_item = document.querySelector('.menu-item')
    menu_item.style.width = '0%'
}