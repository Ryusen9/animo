const menuBtn = document.getElementById('menuBar')
const closeBtn = document.getElementById('closeMenu')
const asideMenu = document.getElementById('sideMenuContainer')

menuBtn.addEventListener('click', () => {
    asideMenu.classList.remove('translate-x-[100%]')
    asideMenu.classList.add('translate-x-[0]')
})

closeBtn.addEventListener('click', () => {
    asideMenu.classList.remove('translate-x-[0]')
    asideMenu.classList.add('translate-x-[100%]')
})