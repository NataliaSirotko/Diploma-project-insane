const showVideo = () => {

    let blocks = document.querySelectorAll('.moduleapp > .module');
    blocks.forEach(item => {  
        let videos = item.querySelectorAll('.module .module__video-item');
    
        videos[0].querySelector('.play').addEventListener('click', function() {  
            let able = this.innerHTML;
            document.querySelector('.close').addEventListener('click', () => {
                videos[1].querySelector('.play').innerHTML = able;
                videos[1].style.opacity = '1';
                videos[1].style.filter = 'none';
            });
        });  
    });   
};
module.exports = showVideo;