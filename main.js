const getMenuBars = document.querySelector('#menu_bars');

const setMenus = document.querySelector('#menus');

getMenuBars.addEventListener('click', () =>{
    if(setMenus.className === 'hidden'){
        setMenus.classList.remove('hidden');
    }
    else{
        setMenus.classList.add('hidden');
    }
})

