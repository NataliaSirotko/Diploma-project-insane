    const mainNavSlider = () => {
        let slides;
        const goPage = () => {
            let slideIndex = 1,
                next = document.querySelectorAll('.sidecontrol__controls .next'),
                logo = document.querySelectorAll('.sidecontrol > a');

            if (document.body.id === "page-main") {
                slides = document.querySelectorAll('.page > div');
            } else {
                slides = document.querySelectorAll('.module');

                if ('.nextmodule') {
                    let next1 = document.querySelectorAll('.nextmodule');
                    next1.forEach(item => {
                        item.addEventListener('click', () => {
                            plusSlides(1);
                        });
                    });
                }
                if ('.prevmodule') {
                    let prev = document.querySelectorAll('.prevmodule');
                    prev.forEach(item => {
                        item.addEventListener('click', () => {
                            plusSlides(-1);
                        });
                    });
                }
            }

            const showSlides = (n) => {

                if (n > slides.length) {
                    slideIndex = 1;
                }
                if (n < 1) {
                    slideIndex = slides.length;
                }

                slides.forEach(item => item.style.display = 'none');

                slides[slideIndex - 1].style.display = 'block';
                slides[slideIndex - 1].animate([{
                        width: '30%'
                    },
                    {
                        offset: 0.6,
                        width: '100%'
                    },
                    {
                        width: '95%'
                    }
                ], {
                    duration: 1000
                });
            };

            showSlides(slideIndex);


            const plusSlides = (n) => {
                showSlides(slideIndex += n);

            };

            next.forEach(item => {
                item.addEventListener('click', () => {
                    plusSlides(1);
                });
            });

            logo.forEach(item => {
                item.addEventListener('click', () => {
                    slides.forEach(item => item.style.display = 'none');
                    slides[0].style.display = 'block';
                    slideIndex = 1;
                });
            });
        };

        goPage();
        slides.forEach(item => item.style.display = 'block');

    };

    module.exports = mainNavSlider;