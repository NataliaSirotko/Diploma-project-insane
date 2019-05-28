const playVideo = () => {
    let modal = document.querySelector('.overlay');

    const openModal = () => {
        modal.style.display = 'block';      
    };

    document.querySelector('.play').addEventListener('click', (event) => {
        event.preventDefault();
        openModal();
        let url = document.querySelector('.play').getAttribute('data-url'),
            video = document.querySelector('#frame');

        video.src = url;
        modal.querySelector('.video').style.margin = '10% auto';

        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
};

module.exports = playVideo;