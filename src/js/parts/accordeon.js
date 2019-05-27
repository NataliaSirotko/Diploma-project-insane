const setAccordeon = () => {
    let button = document.querySelectorAll('.module__info-show');

    button.forEach(item => {
        item.addEventListener('click', function() {
            let text = this.nextElementSibling;
            text.classList.toggle('hidden');
        });
    });  
};

module.exports = setAccordeon;