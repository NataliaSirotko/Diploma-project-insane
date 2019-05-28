const setAccordeon = () => {
    let button = document.querySelectorAll('.module__info-show');

    button.forEach(item => {
        let text = document.createElement('p');
        text.classList.add('hidden');
        item.nextElementSibling.insertAdjacentElement('beforebegin', text);             
        text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`;
        
        item.addEventListener('click', function() {
            text.classList.toggle('hidden');
        });
    });  
};

module.exports = setAccordeon;