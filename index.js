console.log('hii');

document.addEventListener('scroll', function(){
    const nav = document.querySelector("nav")

    if(window.scrollY > 0){
      nav.classList.add('scroll')
    }else{
        nav.classList.remove('scroll')
    }
})
