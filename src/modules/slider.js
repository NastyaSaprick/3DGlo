const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content')
  const slides = document.querySelectorAll('.portfolio-item')
  const dots = document.querySelectorAll('.dot') //dot-active
  const timeInterval = 2000
  
  let currentSlide = 0  //это первый слайд
  let interval          //переменная интервал


  //сокращение функций
  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass)
  }
  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass)
  }


  //функция автомата (замкнутый круг)
  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active')
    prevSlide(dots, currentSlide, 'dot-active')
    currentSlide++
    //если строка слайдов закончилась то происходит обнуление, тоесть возврат к нулевому слайду
    if (currentSlide >= slides.length) {
        currentSlide = 0
    }
    nextSlide(slides, currentSlide, 'portfolio-item-active')
    nextSlide(dots, currentSlide, 'dot-active')
  }
  //эта функция будет запускать в интервале функцию автомата
  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer)
  }
  const stopSlide = () => {
    clearInterval(interval)
  }


  //переключение слайдов по стрелкам и кружочкам
  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault() //отключение заглушки

    if (!e.target.matches('.dot, .portfolio-btn')) {
      return
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active')
    prevSlide(dots, currentSlide, 'dot-active')
    //условие
    if(e.target.matches('#arrow-right')) {
      currentSlide++
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--
    } else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if(e.target === dot) {
          currentSlide = index
        }
      })
    }
    //если строка слайдов закончилась то происходит обнуление, тоесть возврат к нулевому слайду(только вперед)
    if (currentSlide >= slides.length) {
      currentSlide = 0
    }
    //если строка слайдов закончилась то происходит обнуление, тоесть возврат к нулевому слайду(только назад)
    if (currentSlide < 0) {
      currentSlide = slides.length - 1
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active')
    nextSlide(dots, currentSlide, 'dot-active')
  })

  sliderBlock.addEventListener('mouseenter', (e) => {
    console.log(e.target);
    if (e.target.matches('.dot, .portfolio-btn')) {
      stopSlide()
    }
  }, true)
  sliderBlock.addEventListener('mouseleave', (e) => {
    console.log(e.target);
    if (e.target.matches('.dot, .portfolio-btn')) {
      autoSlide(timeInterval)
    }
  }, true)

  startSlide(timeInterval)

}

export default slider