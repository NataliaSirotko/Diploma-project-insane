require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    let mainNavSlider = require('./parts/mainSlider.js'), 
        setAccordeon = require('./parts/accordeon.js'),
        download = require('./parts/download.js'),
        showVideo = require('./parts/showvideo.js');

    mainNavSlider();
    setAccordeon();
    download();
    showVideo();
    
    if (document.body.id === "page-main") {
    let playVideo = require('./parts/playVideo.js'),
        flexSliders = require('./parts/flexSliders.js'),
        goToLink = require('./parts/goToLink.js'),
        setDifferance = require('./parts/setDifferance.js'),
        showNotification = require('./parts/notification.js'),
        sendForm = require('./parts/sendform.js');
            
    playVideo();
    goToLink();
    setDifferance();
    showNotification();
    
    let wrap = document.querySelector('.showup__content-slider'),
        slides = wrap.querySelectorAll('a.card'),
        nextPrev = document.querySelectorAll('.showup__content-title .play__circle');
    flexSliders(wrap, slides, nextPrev);

    wrap = document.querySelector('.page .modules__content-slider');
    slides = wrap.querySelectorAll('.card');
    nextPrev = document.querySelectorAll('.modules .modules__info-btns button');
    flexSliders(wrap, slides, nextPrev);

    wrap = document.querySelector('.feed__slider');
    slides = wrap.querySelectorAll('.feed__item');
    nextPrev = document.querySelectorAll('.feed .play__circle');
    flexSliders(wrap, slides, nextPrev);

    let form = document.getElementsByTagName('form'),
        wrapper = document.querySelector('.schedule__form');

    sendForm(form[1], wrapper);
    }
});

