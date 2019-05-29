const flexSliders = (wrap, slides, nextPrev) => {

    wrap.style.cssText = 'overflow: hidden; display: -webkit-box; display: -moz-box; display: -webkit-flex; display: -ms-flexbox; display: flex;';
    slides.forEach(item => item.style.cssText = 'flex-shrink: 0; -webkit-flex-shrink: 0; -moz-flex-shrink: 0; -ms-flex: 0;'); 
    //wrap.style.overflow = "hidden";
    //wrap.style.display = "flex";
    //slides.forEach(item => item.style.flexShrink = '0');
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
            wrap.insertBefore(slides[slideIndex - 1], wrap.firstChild);
        }

        // slides[slideIndex - 1].animate([{
        //         opacity: '.4'
        //     },
        //     {
        //         opacity: '1'
        //     }
        // ], {
        //     duration: 2000
        // });

        // Card Active
        if (wrap.classList.contains('feed__slider')) {
            slides.forEach(it => {
                it.classList.remove('feed__item-active');
                it.style.height = '270px';
            });
            slides[slideIndex - 1].classList.add('feed__item-active');
            slides[slideIndex - 1].style.height = '430px';

        } else {
            slides.forEach(item => item.querySelector('.card__title').style.opacity = '.4');
            slides[slideIndex - 1].querySelector('.card__title').style.opacity = '1';

            slides.forEach(item => item.querySelector('.card__controls-arrow').style.opacity = '0');
            slides[slideIndex - 1].querySelector('.card__controls-arrow').style.opacity = '1';
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

module.exports = flexSliders;