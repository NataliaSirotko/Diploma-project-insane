const goToLink = () => {

    let cards = document.querySelectorAll('a.card');
    cards.forEach((item, i) => {
        item.addEventListener('click', () => {
            item.href = `modules.html#${i+1}`;          
        });
    });
    
    let go = document.querySelector('.plus');
    go.addEventListener('click', () => {
        window.location.href = "modules.html#1";   
    });
    
};
 module.exports = goToLink;