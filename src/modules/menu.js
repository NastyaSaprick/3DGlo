const menu = () => {
  const menuBtn = document.querySelector('.menu')
  const menu = document.querySelector('menu')
  const closeBtn = menu.querySelector('.close-btn')
  const menuItems = menu.querySelectorAll('ul>li>a')
  //функция закрытия и открытия миню
  const handleMenu = () => {
    //1 вариант 
    // if(!menu.style.transform){
    //   menu.style.transform = `translateX(0)`
    // }else{
    //   menu.style.transform = ``
    // }

    //2 вариант
    menu.classList.toggle('active-menu')
  }

  menuBtn.addEventListener('click', handleMenu)

  closeBtn.addEventListener('click', handleMenu)

  menuItems.forEach(menuItem =>  menuItem.addEventListener('click', handleMenu))
}
export default menu