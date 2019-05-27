const flexSliders = () => {

    if (document.body.id === "page-main") {
    const goPageSlider = (wrap, slides, nextPrev) => {
        
        wrap.style.overflow = "hidden";
        wrap.style.display = "flex";
        slides.forEach(item => item.style.flexShrink = '0');
      
        let slideIndex = 1;

        const showSlides = (n) => {
            
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            if (nextPrev[1]) {
                wrap.appendChild(wrap.firstChild);
                wrap.insertBefore(slides[slideIndex-1], wrap.firstChild);
            }

            slides[slideIndex-1].animate([{
                    opacity: '.4'
                },
                {
                    opacity: '1'
                }
            ], {
                duration: 2000
            });

            // Card Active
            if (wrap.classList.contains('feed__slider')) {           
                slides.forEach(it => {
                    it.classList.remove('feed__item-active');
                    it.style.height = '270px';
                });
                slides[slideIndex-1].classList.add('feed__item-active');
                slides[slideIndex-1].style.height = '430px';

            } else {
                slides.forEach(item => item.querySelector('.card__title').style.opacity = '.4');
                slides[slideIndex-1].querySelector('.card__title').style.opacity = '1';

                slides.forEach(item => item.querySelector('.card__controls-arrow').style.opacity = '0');
                slides[slideIndex-1].querySelector('.card__controls-arrow').style.opacity = '1';
            }
        };

        showSlides(slideIndex);
        
        const plusSlides = (n) => {
            showSlides(slideIndex += n);
        };
        
        nextPrev[1].addEventListener('click', () => {
            plusSlides(1);      
        }); 
    
        nextPrev[0].addEventListener('click', () => {
            wrap.insertBefore(wrap.lastChild, wrap.firstChild);
            plusSlides(-1);
        });

        if (wrap.classList.contains('modules__content-slider')) {
            setInterval(() => {
            plusSlides(1);
        }, 4000);
        }
        
    };

    let wrap = document.querySelector('.showup__content-slider'),
        slides = wrap.querySelectorAll('a.card'),
        nextPrev = document.querySelectorAll('.showup__content-title .play__circle');
    goPageSlider(wrap, slides, nextPrev);

    wrap = document.querySelector('.page .modules__content-slider');
    slides = wrap.querySelectorAll('.card');
    nextPrev = document.querySelectorAll('.modules .modules__info-btns button');
    goPageSlider(wrap, slides, nextPrev);

    wrap = document.querySelector('.feed__slider');
    slides = wrap.querySelectorAll('.feed__item');
    nextPrev = document.querySelectorAll('.feed .play__circle');
    goPageSlider(wrap, slides, nextPrev);
}
};

module.exports = flexSliders;