require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    let mainNavSlider = require('./parts/mainSlider.js'),
        playVideo = require('./parts/playVideo.js'),
        flexSliders = require('./parts/flexSliders.js'),
        goToLink = require('./parts/goToLink.js'),
        setDifferance = require('./parts/setDifferance.js'),
        showNotification = require('./parts/notification.js'),
        setAccordeon = require('./parts/accordeon.js');

    mainNavSlider();
    playVideo();
    flexSliders();
    goToLink();
    setDifferance();
    showNotification();
    setAccordeon();
});

