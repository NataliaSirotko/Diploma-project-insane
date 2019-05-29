const playVideo = () => {
    let modal = document.querySelector('.overlay');

    const openModal = () => {
        modal.style.display = 'block';      
    };

    document.querySelectorAll('.play').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            openModal();
            let url = item.getAttribute('data-url'),
                video = document.querySelector('#frame');

            video.src = url;
            modal.querySelector('.video').style.margin = '10% auto';

            modal.querySelector('.close').addEventListener('click', () => {
                modal.style.display = 'none';
                video.src = video.src;
            });
        });
    });
    
};

module.exports = playVideo;