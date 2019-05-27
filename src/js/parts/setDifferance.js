const setDifferance = () => {
   
    let officeroldItems = document.querySelectorAll('.officerold .officer__card-item'),
        clickItem = document.querySelector('.officerold #first');

    officeroldItems.forEach(item => item.style.visibility = 'hidden');
    clickItem.style.visibility = 'visible';

    clickItem.querySelector('.plus').addEventListener('click', () => {
        let next = clickItem.nextElementSibling;
        next.style.visibility = 'visible';
        next.insertAdjacentElement('afterend', clickItem);
        if(!clickItem.nextElementSibling) {
            clickItem.style.display = 'none';
        }
    });

};

module.exports = setDifferance;