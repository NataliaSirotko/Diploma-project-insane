const showVideo = () => {

    let blocks = document.querySelectorAll('.moduleapp > .module');
    blocks.forEach(item => {  
        let videos = item.querySelectorAll('.module .module__video-item');
    
        videos[0].querySelector('.play').addEventListener('click', function() {
        
            document.querySelector('.overlay').style.display = 'block';
            let iframe = document.querySelector('#frame');
            let able = this.innerHTML;
            frame.src = document.querySelector('.play').getAttribute('data-url');
            document.querySelector('#page-modules .video').style.margin = '10% auto';
            
            document.querySelector('.close').addEventListener('click', () => {
                document.querySelector('#page-modules .overlay').style.display = 'none';
                iframe.src = iframe.src; //iframe.src = ''; 
                videos[1].querySelector('.play').innerHTML = able;
                videos[1].style.opacity = '1';
                videos[1].style.filter = 'none';
                videos[1].querySelector('.play').addEventListener('click', () => {
                    document.querySelector('#page-modules .overlay').style.display = 'block'; 
                });
            });
        });  
    });   
};
module.exports = showVideo;