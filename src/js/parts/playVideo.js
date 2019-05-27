const playVideo = () => {
    let modal = document.querySelector('.overlay'),
        wrapper = modal.querySelector('.video'),
        playButton = document.querySelector('.play');

    const openModal = () => {
        modal.style.display = 'block';      
    };

    playButton.addEventListener('click', (event) => {
        event.preventDefault();
        openModal();
        let url = playButton.getAttribute('data-url'),
            video = document.querySelector('#frame'),
            close = modal.querySelector('.close');

        video.src = url;
        wrapper.style.margin = '10% auto';

        close.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
};

module.exports = playVideo;