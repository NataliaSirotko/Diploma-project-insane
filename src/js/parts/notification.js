const showNotification = () => {    
    if (document.body.id === "page-main") {
    let notification = document.querySelector('.hanson');
    notification.style.display = "none";

    let button = document.querySelectorAll('.sidecontrol__controls .next')[1];
        button.addEventListener('click', () => {
            setTimeout(function() {
                notification.style.display = 'block';
            }, 3000);
        });
    }
};

module.exports = showNotification;